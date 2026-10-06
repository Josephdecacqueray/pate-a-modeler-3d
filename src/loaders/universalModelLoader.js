import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader.js';
import { ColladaLoader } from 'three/examples/jsm/loaders/ColladaLoader.js';
import { generateClayTextures } from '../materials/clayMaterial.js';

// Cache des textures chargées pour éviter les re-téléchargements inutiles
const textureCache = new Map();

function getOrCreateTexture(url) {
  if (textureCache.has(url)) {
    return textureCache.get(url);
  }
  const loader = new THREE.TextureLoader();
  const texture = loader.load(url);
  texture.colorSpace = THREE.SRGBColorSpace;
  textureCache.set(url, texture);
  return texture;
}

/**
 * Fonction de chargement universelle polymorphe :
 * 1. Tente d'abord le format .obj / .mtl via OBJLoader et MTLLoader
 * 2. Si le format .obj échoue ou si le fichier est un .dae (ex: 000.dae), bascule sur ColladaLoader
 * 3. Résolution défensive des textures : Zéro modèle noir ou invisible
 * 4. Auto-cadrage et normalisation mathématique Box3 (Astérix: 1.9m, Obélix: 2.45m, base à y = 0)
 *
 * @param {string} folderPath - Chemin du dossier contenant le modèle (ex: './models/asterix')
 * @param {string} baseName - Nom de base ou fichier (ex: 'Asterix', 'Obelix', '000.dae')
 * @param {object} options - Options optionnelles (isObelix, targetHeight, isEnvironment, applyClayShaders)
 * @returns {Promise<THREE.Object3D>}
 */
export async function loadCharacterModel(folderPath, baseName, options = {}) {
  // Normalisation du chemin avec slash final
  const cleanFolder = folderPath.endsWith('/') ? folderPath : folderPath + '/';
  const cleanBase = baseName.replace(/\.(obj|dae|mtl)$/i, '');
  const isExplicitDae = baseName.toLowerCase().endsWith('.dae');
  const isObelix = options.isObelix ?? (/obelix/i.test(cleanBase) || /obelix/i.test(folderPath));
  const isAsterix = options.isAsterix ?? (/asterix/i.test(cleanBase) || /asterix/i.test(folderPath));
  const isEnvironment = options.isEnvironment ?? (/environnement/i.test(folderPath) || /000/i.test(cleanBase));

  // Identification de la texture principale diffuse du personnage
  let defaultDiffuseTextureUrl = null;
  if (options.mainTextureUrl) {
    defaultDiffuseTextureUrl = options.mainTextureUrl;
  } else if (isAsterix) {
    defaultDiffuseTextureUrl = `${cleanFolder}asterix.png`;
  } else if (isObelix) {
    defaultDiffuseTextureUrl = `${cleanFolder}obelix01.png`;
  }

  let defaultDiffuseTexture = null;
  if (defaultDiffuseTextureUrl) {
    defaultDiffuseTexture = getOrCreateTexture(defaultDiffuseTextureUrl);
  }

  // Textures procédurales d'argile (empreintes digitales + micro-aspérités)
  let clayProceduralTextures = null;
  if (options.applyClayShaders !== false && !isEnvironment) {
    try {
      clayProceduralTextures = generateClayTextures();
    } catch (e) {
      console.warn('[UNIVERSAL-LOADER] Notice textures argile procédurales:', e.message);
    }
  }

  // --- ÉTAPE 1 : TENTATIVE OBJ / MTL ---
  async function loadObjFormat() {
    const mtlLoader = new MTLLoader();
    mtlLoader.setPath(cleanFolder);
    mtlLoader.setResourcePath(cleanFolder);

    let materials = null;
    try {
      materials = await new Promise((resolve, reject) => {
        mtlLoader.load(`${cleanBase}.mtl`, resolve, undefined, reject);
      });
      materials.preload();
    } catch (mtlErr) {
      console.warn(`[UNIVERSAL-LOADER] Notice MTL (${cleanBase}.mtl) : ${mtlErr.message || mtlErr}. Poursuite OBJ...`);
    }

    const objLoader = new OBJLoader();
    if (materials) {
      objLoader.setMaterials(materials);
    }
    objLoader.setPath(cleanFolder);
    objLoader.setResourcePath(cleanFolder);

    return new Promise((resolve, reject) => {
      objLoader.load(`${cleanBase}.obj`, resolve, options.onProgress, reject);
    });
  }

  // --- ÉTAPE 2 : TENTATIVE COLLADA (.DAE) ---
  async function loadColladaFormat() {
    const colladaLoader = new ColladaLoader();
    colladaLoader.setPath(cleanFolder);
    colladaLoader.setResourcePath(cleanFolder);

    const daeFileName = baseName.toLowerCase().endsWith('.dae') ? baseName : `${cleanBase}.dae`;
    return new Promise((resolve, reject) => {
      colladaLoader.load(
        daeFileName,
        (collada) => {
          resolve(collada.scene || collada);
        },
        options.onProgress,
        reject
      );
    });
  }

  let loadedObject = null;
  let usedFormat = 'obj';

  if (isExplicitDae) {
    // Si explicitement demandé en .dae (comme l'environnement 000.dae)
    try {
      loadedObject = await loadColladaFormat();
      usedFormat = 'dae';
    } catch (daeErr) {
      console.warn(`[UNIVERSAL-LOADER] Échec Collada direct pour ${baseName}:`, daeErr.message);
      // Tentative de repli sur OBJ si disponible
      loadedObject = await loadObjFormat();
      usedFormat = 'obj';
    }
  } else {
    // Tente d'abord le format OBJ / MTL
    try {
      loadedObject = await loadObjFormat();
      usedFormat = 'obj';
    } catch (objErr) {
      console.warn(`[UNIVERSAL-LOADER] Format OBJ indisponible pour ${cleanBase} (${objErr.message}). Bascule automatique sur ColladaLoader (.dae)...`);
      try {
        loadedObject = await loadColladaFormat();
        usedFormat = 'dae';
      } catch (daeErr) {
        throw new Error(`[UNIVERSAL-LOADER] Échec critique du chargement polymorphe pour ${cleanBase} (OBJ: ${objErr.message} / DAE: ${daeErr.message})`);
      }
    }
  }

  if (!loadedObject) {
    throw new Error(`[UNIVERSAL-LOADER] Aucun objet 3D n'a pu être extrait pour ${cleanBase}`);
  }

  // --- ÉTAPE 3 : RÉSOLUTION DÉFENSIVE DES TEXTURES (ZÉRO MODÈLE NOIR OU INVISIBLE) ---
  loadedObject.traverse((child) => {
    if (child.isMesh) {
      // Activer les ombres portées et reçues
      child.castShadow = true;
      child.receiveShadow = true;

      const rawMaterials = Array.isArray(child.material) ? child.material : [child.material];
      const processedMaterials = rawMaterials.map((mat) => {
        if (!mat) {
          return createFallbackClayMaterial(defaultDiffuseTexture, isObelix);
        }

        const hasDiffuseMap = !!(mat.map);
        const isTransparentOrEmpty = (mat.transparent && mat.opacity <= 0.05);

        // Si la texture diffuse est manquante ou transparente : lier manuellement un MeshStandardMaterial
        if (!hasDiffuseMap || isTransparentOrEmpty) {
          if (defaultDiffuseTexture) {
            const standardMat = new THREE.MeshStandardMaterial({
              map: defaultDiffuseTexture,
              roughness: 0.85,
              metalness: 0.05
            });
            if (clayProceduralTextures) {
              standardMat.bumpMap = clayProceduralTextures.bumpMap;
              standardMat.bumpScale = 0.02;
              standardMat.normalMap = clayProceduralTextures.normalMap;
              standardMat.normalScale = new THREE.Vector2(0.2, 0.2);
            }
            return standardMat;
          } else {
            // Matériau d'argile stylisé mat PBR
            return createFallbackClayMaterial(null, isObelix, options.clayColor);
          }
        }

        // Si une texture diffuse est présente : normaliser le colorSpace et le rendu satiné mat
        mat.roughness = (mat.roughness !== undefined) ? Math.max(0.75, mat.roughness) : 0.85;
        mat.metalness = (mat.metalness !== undefined) ? Math.min(0.15, mat.metalness) : 0.05;

        if (mat.map) {
          mat.map.colorSpace = THREE.SRGBColorSpace;
        }

        if (clayProceduralTextures && !mat.bumpMap) {
          mat.bumpMap = clayProceduralTextures.bumpMap;
          mat.bumpScale = 0.015;
          mat.normalMap = clayProceduralTextures.normalMap;
          mat.normalScale = new THREE.Vector2(0.15, 0.15);
        }

        mat.needsUpdate = true;
        return mat;
      });

      child.material = Array.isArray(child.material) ? processedMaterials : processedMaterials[0];
    }
  });

  // --- ÉTAPE 4 : AUTO-CADRAGE & NORMALISATION MATHÉMATIQUE BOX3 ---
  if (!isEnvironment) {
    const box = new THREE.Box3().setFromObject(loadedObject);
    const size = box.getSize(new THREE.Vector3());
    const center = box.getCenter(new THREE.Vector3());

    // Normalisation de l'échelle (Astérix: hauteur cible 1.9m, Obélix: hauteur cible 2.45m)
    const targetHeight = isObelix ? 2.45 : (options.targetHeight || 1.9);
    const scaleFactor = targetHeight / (size.y || 1.0);
    loadedObject.scale.setScalar(scaleFactor);

    // Recentrage immédiat : pieds posés exactement à y = 0
    box.setFromObject(loadedObject);
    const scaledCenter = box.getCenter(new THREE.Vector3());
    loadedObject.position.x -= scaledCenter.x;
    loadedObject.position.y -= box.min.y;
    loadedObject.position.z -= scaledCenter.z;
  } else {
    // Normalisation de l'environnement (000.dae)
    const box = new THREE.Box3().setFromObject(loadedObject);
    const size = box.getSize(new THREE.Vector3());
    const center = box.getCenter(new THREE.Vector3());

    const targetHeight = options.targetHeight || 16.0;
    const scaleFactor = targetHeight / (size.y || 1.0);
    loadedObject.scale.setScalar(scaleFactor);

    box.setFromObject(loadedObject);
    const scaledCenter = box.getCenter(new THREE.Vector3());
    loadedObject.position.x -= scaledCenter.x;
    loadedObject.position.y -= box.min.y;
    loadedObject.position.z -= scaledCenter.z;
  }

  loadedObject.userData = {
    folderPath,
    baseName,
    usedFormat,
    isObelix,
    isAsterix,
    isEnvironment
  };

  return loadedObject;
}

function createFallbackClayMaterial(diffuseTexture, isObelix, customColor) {
  if (diffuseTexture) {
    return new THREE.MeshStandardMaterial({
      map: diffuseTexture,
      roughness: 0.85,
      metalness: 0.05
    });
  }
  const color = customColor || (isObelix ? 0x2980b9 : 0xe74c3c);
  return new THREE.MeshStandardMaterial({
    color,
    roughness: 0.85,
    metalness: 0.05
  });
}

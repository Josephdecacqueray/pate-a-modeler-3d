import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader.js';
import { generateClayTextures } from '../materials/clayMaterial.js';

export class ClayCharacter {
  /**
   * @param {'A' | 'B'} id - 'A' (Astériclos) ou 'B' (Obélicon)
   * @param {object} options
   */
  constructor(id, options = {}) {
    this.id = id;
    this.name = options.name || (id === 'A' ? 'Astériclos' : 'Obélicon');

    // Groupe racine principal (placé et orienté par les scènes et la physique)
    this.group = new THREE.Group();
    this.group.name = `CharacterRoot_${id}`;

    // Groupe interne pour l'animation procédurale cartoon (squash & stretch, rebonds)
    // AUCUN maillage individuel n'est disloqué : toutes les déformations s'appliquent à ce groupe
    this.modelRoot = new THREE.Group();
    this.modelRoot.name = `ModelRoot_${id}`;
    this.group.add(this.modelRoot);

    // État d'animation procédurale cartoon
    this.currentAction = 'idle';
    this.animTime = 0;
    this.actionProgress = 0;

    // Valeurs lissées via THREE.MathUtils.lerp
    this.currentScaleY = 1.0;
    this.currentScaleXZ = 1.0;
    this.currentPosY = 0.0;
    this.currentRotX = 0.0;
    // Ancre pour la tête / projection des bulles de dialogue BD
    this.head = new THREE.Group();
    this.head.name = `HeadAnchor_${id}`;
    this.head.position.y = (id === 'A' ? 1.75 : 2.25);
    this.modelRoot.add(this.head);

    this.isLoaded = false;

    // Chargement du modèle 3D officiel (Asterix / Obelix)
    this._load3DModel();
  }

  getHeadWorldPosition(targetVec3) {
    if (this.head) {
      this.head.getWorldPosition(targetVec3);
    } else {
      this.group.getWorldPosition(targetVec3);
      targetVec3.y += (this.id === 'A' ? 1.75 : 2.25);
    }
    return targetVec3;
  }

  /**
   * Chargement, normalisation Box3 et centrage sur le terrain (base à y = 0)
   */
  _load3DModel() {
    const isA = (this.id === 'A');
    const folder = isA ? 'asterix' : 'obelix';
    const mtlFile = isA ? 'Asterix.mtl' : 'Obelix.mtl';
    const objFile = isA ? 'Asterix.obj' : 'Obelix.obj';

    // Résolution du chemin absolu/relatif selon l'environnement Vite
    const baseUrl = import.meta.env?.BASE_URL || './';
    const cleanBase = baseUrl.endsWith('/') ? baseUrl : baseUrl + '/';
    const modelPath = `${cleanBase}models/${folder}/`;

    const mtlLoader = new MTLLoader();
    mtlLoader.setPath(modelPath);

    mtlLoader.load(
      mtlFile,
      (materials) => {
        materials.preload();

        const objLoader = new OBJLoader();
        objLoader.setMaterials(materials);
        objLoader.setPath(modelPath);

        objLoader.load(
          objFile,
          (object) => {
            this._setupLoadedModel(object);
          },
          undefined,
          (err) => {
            console.warn(`[3D-LOADER] Échec OBJ pour ${this.name}, fallback procédural:`, err.message);
            this._setupProceduralFallback();
          }
        );
      },
      undefined,
      (err) => {
        console.warn(`[3D-LOADER] Échec MTL pour ${this.name}, fallback procédural:`, err.message);
        this._setupProceduralFallback();
      }
    );
  }

  _setupLoadedModel(object) {
    // Calcul de la boîte englobante Box3 pour normalisation
    const box = new THREE.Box3().setFromObject(object);
    const size = box.getSize(new THREE.Vector3());

    // Hauteur homogène demandée (~2 unités : Astérix ~1.85u, Obélix ~2.25u)
    const targetHeight = (this.id === 'A') ? 1.85 : 2.25;
    const scaleFactor = targetHeight / (size.y || 1);
    object.scale.setScalar(scaleFactor);

    // Recalcul de la boîte après mise à l'échelle
    box.setFromObject(object);
    const scaledMin = box.min;
    const scaledCenter = box.getCenter(new THREE.Vector3());

    // Alignement rigoureux : base à y = 0, centré sur X et Z
    object.position.x = -scaledCenter.x;
    object.position.z = -scaledCenter.z;
    object.position.y = -scaledMin.y;

    // Shaders et textures d'argile (texture originale + bump d'empreintes)
    const { bumpMap, normalMap } = generateClayTextures();

    object.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;

        if (child.material) {
          const mats = Array.isArray(child.material) ? child.material : [child.material];
          mats.forEach((mat) => {
            mat.roughness = 0.85;
            mat.metalness = 0.03;
            mat.bumpMap = bumpMap;
            mat.bumpScale = 0.02;
            mat.normalMap = normalMap;
            mat.normalScale = new THREE.Vector2(0.2, 0.2);
            if (mat.map) {
              mat.map.colorSpace = THREE.SRGBColorSpace;
            }
            mat.needsUpdate = true;
          });
        }
      }
    });

    // Nettoyage de l'éventuel fallback temporaire
    while (this.modelRoot.children.length > 0) {
      this.modelRoot.remove(this.modelRoot.children[0]);
    }

    this.modelMesh = object;
    this.modelRoot.add(object);
    this.isLoaded = true;
  }

  _setupProceduralFallback() {
    if (this.isLoaded) return;
    const fallbackGroup = new THREE.Group();
    const isA = (this.id === 'A');

    // Silhouette d'argile de secours
    const matClay = new THREE.MeshStandardMaterial({
      color: isA ? 0xe74c3c : 0x2980b9,
      roughness: 0.85
    });

    const body = new THREE.Mesh(
      new THREE.CylinderGeometry(isA ? 0.35 : 0.65, isA ? 0.45 : 0.75, isA ? 1.8 : 2.2, 16),
      matClay
    );
    body.position.y = (isA ? 1.8 : 2.2) * 0.5;
    body.castShadow = true;
    body.receiveShadow = true;
    fallbackGroup.add(body);

    this.modelRoot.add(fallbackGroup);
  }

  setAction(actionName) {
    this.currentAction = actionName;
    this.actionProgress = 0;
  }

  /**
   * Animation procédurale cartoon (Style Pâte à Modeler) :
   * - Squash & stretch élastique subtil sur Y avec compensation sur X et Z
   * - Oscillation d'inclinaison
   * - Rebond vertical rythmé lors du déplacement
   * - Lissage impératif via THREE.MathUtils.lerp pondéré par delta
   */
  update(delta) {
    this.animTime += delta;
    this.actionProgress += delta;

    const t = this.animTime;
    const action = this.currentAction;

    let targetScaleY = 1.0;
    let targetScaleXZ = 1.0;
    let targetPosY = 0.0;
    let targetRotX = 0.0;
    let targetRotY = 0.0;
    let targetRotZ = 0.0;

    if (action === 'talk') {
      // Prise de parole : squash & stretch élastique sur Y avec compensation X/Z + oscillation d'inclinaison
      const speechFactor = 1.0 + Math.sin(t * 8.0) * 0.05;
      targetScaleY = speechFactor;
      targetScaleXZ = 1.0 / Math.sqrt(speechFactor);
      targetRotZ = Math.sin(t * 4.0) * 0.04;
      targetRotX = Math.sin(t * 6.0) * 0.03;
      targetPosY = Math.max(0, Math.sin(t * 8.0)) * 0.03;

    } else if (action === 'move' || action === 'run' || action === 'kick') {
      // Déplacement / course : inclinaison dans le sens de la trajectoire + rebond vertical rythmé
      const bounce = Math.abs(Math.sin(t * 10.0)) * 0.15;
      targetPosY = bounce;
      targetRotX = 0.14; // Inclinaison vers l'avant
      targetRotZ = Math.sin(t * 10.0) * 0.05;
      targetScaleY = 1.0 + (bounce > 0.08 ? 0.04 : -0.04);
      targetScaleXZ = 1.0 / Math.sqrt(targetScaleY);

    } else if (action === 'think') {
      // Réflexion : inclinaison latérale pensive et léger étirement
      targetRotZ = (this.id === 'A' ? 0.08 : -0.08);
      targetRotX = 0.06;
      targetScaleY = 1.03;
      targetScaleXZ = 1.0 / Math.sqrt(targetScaleY);

    } else if (action === 'shrug') {
      // Haussement d'épaules comique / tassement
      targetScaleY = 0.90;
      targetScaleXZ = 1.0 / Math.sqrt(targetScaleY);
      targetRotZ = Math.sin(t * 12.0) * 0.03;

    } else if (action === 'celebrate') {
      // Célébration : grands bonds joyeux
      const jump = Math.abs(Math.sin(t * 8.0)) * 0.35;
      targetPosY = jump;
      targetScaleY = 1.0 + Math.sin(t * 8.0) * 0.08;
      targetScaleXZ = 1.0 / Math.sqrt(targetScaleY);
      targetRotY = Math.sin(t * 5.0) * 0.20;

    } else if (action === 'prayTridentine' || action === 'incurvatio') {
      // Prière Tridentine : révérence solennelle et inclinaison lente
      targetRotX = 0.24;
      targetScaleY = 0.95;
      targetScaleXZ = 1.0 / Math.sqrt(targetScaleY);

    } else if (action === 'praiseEmmanuel' || action === 'orans' || action === 'clap') {
      // Louange Emmanuel : balancement orante doux et élévation rythmée
      targetRotZ = Math.sin(t * 3.2) * 0.07;
      targetPosY = Math.abs(Math.sin(t * 6.4)) * 0.07;
      targetScaleY = 1.0 + Math.sin(t * 6.4) * 0.03;
      targetScaleXZ = 1.0 / Math.sqrt(targetScaleY);

    } else {
      // Idle : respiration subtile en pâte à modeler
      const breath = 1.0 + Math.sin(t * 2.8) * 0.02;
      targetScaleY = breath;
      targetScaleXZ = 1.0 / Math.sqrt(breath);
      targetRotZ = Math.sin(t * 1.4) * 0.015;
    }

    // Lissage impératif via THREE.MathUtils.lerp pondéré par deltaTime
    const lerpRate = Math.min(1.0, 10.0 * delta);

    this.currentScaleY = THREE.MathUtils.lerp(this.currentScaleY, targetScaleY, lerpRate);
    this.currentScaleXZ = THREE.MathUtils.lerp(this.currentScaleXZ, targetScaleXZ, lerpRate);
    this.currentPosY = THREE.MathUtils.lerp(this.currentPosY, targetPosY, lerpRate);
    this.currentRotX = THREE.MathUtils.lerp(this.currentRotX, targetRotX, lerpRate);
    this.currentRotY = THREE.MathUtils.lerp(this.currentRotY, targetRotY, lerpRate);
    this.currentRotZ = THREE.MathUtils.lerp(this.currentRotZ, targetRotZ, lerpRate);

    // Application stricte au groupe interne de la figurine (zéro dislocation de sous-parties)
    this.modelRoot.scale.set(this.currentScaleXZ, this.currentScaleY, this.currentScaleXZ);
    this.modelRoot.position.y = this.currentPosY;
    this.modelRoot.rotation.x = this.currentRotX;
    this.modelRoot.rotation.y = this.currentRotY;
    this.modelRoot.rotation.z = this.currentRotZ;
  }
}

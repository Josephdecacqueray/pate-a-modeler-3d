import * as THREE from 'three';

let cachedBumpTexture = null;
let cachedNormalTexture = null;

/**
 * Générateur haute définition (2048x2048) de textures d'argile de modelage (Plasticine) :
 * - Empreintes digitales réelles (spirales et arches cutanées)
 * - Micro-aspérités et grain organique
 * - Traces d'ébauchoir et de spatule
 * - Entailles d'ongles
 */
export function generateClayTextures() {
  if (cachedBumpTexture && cachedNormalTexture) {
    return { bumpMap: cachedBumpTexture, normalMap: cachedNormalTexture };
  }

  const size = 2048;
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d');

  // 1. Fond neutre (128)
  ctx.fillStyle = '#808080';
  ctx.fillRect(0, 0, size, size);

  // 2. Grain de matière d'argile continu
  const imgData = ctx.getImageData(0, 0, size, size);
  const data = imgData.data;
  for (let i = 0; i < data.length; i += 4) {
    const grain = (Math.random() - 0.5) * 32;
    const v = Math.min(255, Math.max(0, 128 + grain));
    data[i] = v;
    data[i + 1] = v;
    data[i + 2] = v;
  }
  ctx.putImageData(imgData, 0, 0);

  // 3. Empreintes digitales visibles (Spirales d'Archimède)
  const numFingerprints = 36;
  for (let f = 0; f < numFingerprints; f++) {
    const cx = Math.random() * size;
    const cy = Math.random() * size;
    const radius = 60 + Math.random() * 80;
    const rotation = Math.random() * Math.PI * 2;

    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(rotation);

    for (let r = 5; r < radius; r += 3.5) {
      const alpha = 0.18 + Math.random() * 0.20;
      ctx.strokeStyle = Math.random() > 0.45 ? `rgba(240, 240, 240, ${alpha})` : `rgba(15, 15, 15, ${alpha})`;
      ctx.lineWidth = 2.0;
      ctx.beginPath();

      const steps = 54;
      for (let s = 0; s <= steps; s++) {
        const theta = (s / steps) * Math.PI * 2;
        const wobble = Math.sin(theta * 5 + f) * 4.0 + Math.cos(theta * 8) * 2.5;
        const x = Math.cos(theta) * (r + wobble);
        const y = Math.sin(theta) * (r * 1.5 + wobble);
        if (s === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();
    }
    ctx.restore();
  }

  // 4. Marques d'ongles (croissants avec sillon et bourrelet)
  for (let n = 0; n < 28; n++) {
    const nx = Math.random() * size;
    const ny = Math.random() * size;
    const arcRadius = 18 + Math.random() * 26;
    const angle = Math.random() * Math.PI * 2;

    ctx.save();
    ctx.translate(nx, ny);
    ctx.rotate(angle);

    ctx.strokeStyle = 'rgba(20, 20, 20, 0.48)';
    ctx.lineWidth = 2.6;
    ctx.beginPath();
    ctx.arc(0, 0, arcRadius, 0.2, Math.PI - 0.2);
    ctx.stroke();

    ctx.strokeStyle = 'rgba(240, 240, 240, 0.40)';
    ctx.lineWidth = 2.2;
    ctx.beginPath();
    ctx.arc(0, 2.0, arcRadius, 0.2, Math.PI - 0.2);
    ctx.stroke();

    ctx.restore();
  }

  // 5. Traces d'ébauchoir et de spatule de modelage
  for (let s = 0; s < 22; s++) {
    const sx = Math.random() * size;
    const sy = Math.random() * size;
    const sLen = 80 + Math.random() * 120;
    const sAngle = Math.random() * Math.PI * 2;

    ctx.save();
    ctx.translate(sx, sy);
    ctx.rotate(sAngle);

    for (let l = -14; l <= 14; l += 4) {
      const grad = ctx.createLinearGradient(0, l, sLen, l);
      grad.addColorStop(0, 'rgba(128,128,128,0)');
      grad.addColorStop(0.3, Math.random() > 0.5 ? 'rgba(220,220,220,0.26)' : 'rgba(40,40,40,0.24)');
      grad.addColorStop(0.7, Math.random() > 0.5 ? 'rgba(220,220,220,0.26)' : 'rgba(40,40,40,0.24)');
      grad.addColorStop(1, 'rgba(128,128,128,0)');

      ctx.strokeStyle = grad;
      ctx.lineWidth = 2.4;
      ctx.beginPath();
      ctx.moveTo(0, l);
      ctx.lineTo(sLen, l);
      ctx.stroke();
    }
    ctx.restore();
  }

  // Texture Bump
  const bumpTex = new THREE.CanvasTexture(canvas);
  bumpTex.wrapS = THREE.RepeatWrapping;
  bumpTex.wrapT = THREE.RepeatWrapping;
  bumpTex.repeat.set(3, 3);
  bumpTex.needsUpdate = true;

  // Génération de la Normal Map à partir du canevas de relief
  const normalCanvas = document.createElement('canvas');
  normalCanvas.width = size;
  normalCanvas.height = size;
  const nCtx = normalCanvas.getContext('2d');
  const srcData = ctx.getImageData(0, 0, size, size).data;
  const nImgData = nCtx.createImageData(size, size);
  const nData = nImgData.data;

  const strength = 1.8;
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const idx = (y * size + x) * 4;
      const xLeft = (x > 0 ? x - 1 : size - 1);
      const xRight = (x < size - 1 ? x + 1 : 0);
      const yUp = (y > 0 ? y - 1 : size - 1);
      const yDown = (y < size - 1 ? y + 1 : 0);

      const hL = srcData[(y * size + xLeft) * 4] / 255.0;
      const hR = srcData[(y * size + xRight) * 4] / 255.0;
      const hU = srcData[(yUp * size + x) * 4] / 255.0;
      const hD = srcData[(yDown * size + x) * 4] / 255.0;

      const dx = (hR - hL) * strength;
      const dy = (hD - hU) * strength;
      const dz = 1.0;

      const len = Math.sqrt(dx * dx + dy * dy + dz * dz);
      nData[idx] = Math.floor(((dx / len) * 0.5 + 0.5) * 255);
      nData[idx + 1] = Math.floor(((-dy / len) * 0.5 + 0.5) * 255);
      nData[idx + 2] = Math.floor(((dz / len) * 0.5 + 0.5) * 255);
      nData[idx + 3] = 255;
    }
  }
  nCtx.putImageData(nImgData, 0, 0);

  const normalTex = new THREE.CanvasTexture(normalCanvas);
  normalTex.wrapS = THREE.RepeatWrapping;
  normalTex.wrapT = THREE.RepeatWrapping;
  normalTex.repeat.set(3, 3);
  normalTex.needsUpdate = true;

  cachedBumpTexture = bumpTex;
  cachedNormalTexture = normalTex;

  return { bumpMap: bumpTex, normalMap: normalTex };
}

// Palette chromatique fidèle au film d'animation "Astérix : Le Domaine des Dieux"
export const CLAY_PALETTE = {
  // Peau & Visage
  skin: 0xf5cba7,
  skinShade: 0xeb984e,
  skinFlush: 0xed8c66,       // Nez bulbeux et joues chaudes
  
  // Astérix
  topBlack: 0x1c2024,        // Haut noir sans manche
  pantsRed: 0xb03a2e,        // Braies rouges
  mustacheBlonde: 0xf4d03f,  // Moustache jaune blonde Uderzo
  shoesBrown: 0x5d4037,      // Chaussures d'argile marron
  beltGreen: 0x1e8449,       // Ceinturon vert à rivets or
  goldRivets: 0xf39c12,      // Rivets et boucles dorées
  helmetGrey: 0x78909c,      // Casque métallique d'argile
  wingsWhite: 0xfdfefe,      // Ailettes blanches modelées

  // Obélix
  skinObelix: 0xf6d3b3,      // Torse nu massif
  pantsObelixBlue: 0x2980b9,  // Rayures verticales cyan / turquoise
  pantsObelixWhite: 0xfdfefe, // Rayures verticales blanches
  mustacheRed: 0xba4a00,     // Moustache rousse tombante
  braidsOrange: 0xd35400,    // Tresses rousses
  braidBowBlack: 0x17202a,   // Petits nœuds noirs
  
  // Décors & Accessoires
  turfGreen: 0x388e3c,       // Sol d'argile vert bosselé
  turfGreenDark: 0x2e7d32,
  menhirRock: 0x839192,      // Monolithe de granit
  menhirMoss: 0x27ae60,      // Mousse végétale d'argile
  goldChalice: 0xf5b041,
  candleWax: 0xfcf3cf,
  candleFlame: 0xf39c12,
  ballWhite: 0xf8f9f9,
  ballBlack: 0x17202a,

  // Compatibilité modes Foot & Prières
  tunicWhite: 0xfdfefe,
  gauloisBlue: 0x2471a3,
  gauloisBlueDark: 0x1a5276,
  gauloisRed: 0xb03a2e,
  gauloisYellow: 0xf39c12,
  altarStone: 0x95a5a6,
  altarWood: 0x6e2c00,
  whiteEye: 0xfdfefe,
  blackEye: 0x17202a,
  beltBrown: 0x6e2c00
};

/**
 * Création d'un matériau Pâte à Modeler (Argile / Plasticine) avec :
 * - Bump Map & Normal Map avec empreintes digitales réelles
 * - Rugosité mate (0.82 - 0.88), zéro spécularité brillante plastique
 * - Faux Subsurface Scattering (SSS) : rim light chaude orangée / ambrée
 */
export function createClayMaterial(colorHex, options = {}) {
  const { bumpMap, normalMap } = generateClayTextures();

  const safeColor = (colorHex !== undefined && colorHex !== null) ? colorHex : 0xcccccc;
  const roughness = options.roughness !== undefined ? options.roughness : 0.85;
  const metalness = options.metalness !== undefined ? options.metalness : 0.02;
  const bumpScale = options.bumpScale !== undefined ? options.bumpScale : 0.045;

  const mat = new THREE.MeshStandardMaterial({
    color: safeColor,
    roughness: roughness,
    metalness: metalness,
    bumpMap: bumpMap,
    bumpScale: bumpScale,
    normalMap: normalMap,
    normalScale: new THREE.Vector2(0.4, 0.4),
    ...options
  });

  // Injection du Subsurface Scattering (SSS) simulé dans le shader GLSL
  mat.onBeforeCompile = (shader) => {
    shader.uniforms.sssColor = { value: new THREE.Color(0xff8c42) }; // Lueur chaude d'argile
    shader.uniforms.sssIntensity = { value: options.sssIntensity !== undefined ? options.sssIntensity : 0.35 };

    // Vertex Shader : passage de la normale vue et position vue
    shader.vertexShader = shader.vertexShader.replace(
      '#include <common>',
      `#include <common>
       varying vec3 vViewNormalClay;
       varying vec3 vViewPosClay;`
    );

    shader.vertexShader = shader.vertexShader.replace(
      '#include <defaultnormal_vertex>',
      `#include <defaultnormal_vertex>
       vViewNormalClay = normalize(transformedNormal);`
    );

    shader.vertexShader = shader.vertexShader.replace(
      '#include <project_vertex>',
      `#include <project_vertex>
       vViewPosClay = -mvPosition.xyz;`
    );

    // Fragment Shader : rim lighting chaude translucide (SSS)
    shader.fragmentShader = shader.fragmentShader.replace(
      '#include <common>',
      `#include <common>
       uniform vec3 sssColor;
       uniform float sssIntensity;
       varying vec3 vViewNormalClay;
       varying vec3 vViewPosClay;`
    );

    shader.fragmentShader = shader.fragmentShader.replace(
      '#include <dithering_fragment>',
      `#include <dithering_fragment>
       vec3 nClay = normalize(vViewNormalClay);
       vec3 vClay = normalize(vViewPosClay);
       float sssFresnel = 1.0 - max(dot(nClay, vClay), 0.0);
       sssFresnel = pow(sssFresnel, 2.8);
       gl_FragColor.rgb += sssColor * sssFresnel * sssIntensity;`
    );
  };

  return mat;
}

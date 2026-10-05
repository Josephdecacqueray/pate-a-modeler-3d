import * as THREE from 'three';

let cachedBumpTexture = null;
let cachedRoughnessTexture = null;

/**
 * Générateur haute définition (2048x2048) de textures d'argile, d'empreintes digitales,
 * de marques d'ongles, de spatules et de micro-fissures de plasticine.
 */
export function generateClayTextures() {
  if (cachedBumpTexture && cachedRoughnessTexture) {
    return { bumpMap: cachedBumpTexture, roughnessMap: cachedRoughnessTexture };
  }

  const size = 2048;
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d');

  // 1. Fond gris moyen neutre (128)
  ctx.fillStyle = '#808080';
  ctx.fillRect(0, 0, size, size);

  // 2. Grain de matière d'argile ultra-fin (bruit de fond continu)
  const imgData = ctx.getImageData(0, 0, size, size);
  const data = imgData.data;
  for (let i = 0; i < data.length; i += 4) {
    const grain = (Math.random() - 0.5) * 26;
    const v = Math.min(255, Math.max(0, 128 + grain));
    data[i] = v;
    data[i + 1] = v;
    data[i + 2] = v;
  }
  ctx.putImageData(imgData, 0, 0);

  // 3. Empreintes digitales détaillées (spirales et arches cutanées)
  const numFingerprints = 32;
  for (let f = 0; f < numFingerprints; f++) {
    const cx = Math.random() * size;
    const cy = Math.random() * size;
    const radius = 55 + Math.random() * 65;
    const rotation = Math.random() * Math.PI * 2;
    const numRidges = 18 + Math.floor(Math.random() * 10);

    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(rotation);

    for (let r = 4; r < radius; r += 3.2) {
      const alpha = 0.12 + Math.random() * 0.18;
      ctx.strokeStyle = Math.random() > 0.45 ? `rgba(235, 235, 235, ${alpha})` : `rgba(25, 25, 25, ${alpha})`;
      ctx.lineWidth = 1.8;
      ctx.beginPath();

      const steps = 48;
      for (let s = 0; s <= steps; s++) {
        const theta = (s / steps) * Math.PI * 2;
        // Déformation naturelle de l'empreinte sous pression
        const wobble = Math.sin(theta * 4 + f) * 3.5 + Math.cos(theta * 7) * 2.0;
        const x = Math.cos(theta) * (r + wobble);
        const y = Math.sin(theta) * (r * 1.55 + wobble); // Forme ovale du doigt
        if (s === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();
    }
    ctx.restore();
  }

  // 4. Marques d'ongles de sculpteur (arcs en croissant avec liseré d'ombre et lumière)
  for (let n = 0; n < 22; n++) {
    const nx = Math.random() * size;
    const ny = Math.random() * size;
    const arcRadius = 18 + Math.random() * 24;
    const angle = Math.random() * Math.PI * 2;

    ctx.save();
    ctx.translate(nx, ny);
    ctx.rotate(angle);

    // Sillon d'ongle sombre
    ctx.strokeStyle = 'rgba(30, 30, 30, 0.45)';
    ctx.lineWidth = 2.4;
    ctx.beginPath();
    ctx.arc(0, 0, arcRadius, 0.2, Math.PI - 0.2);
    ctx.stroke();

    // Bourrelet de matière soulevé clair
    ctx.strokeStyle = 'rgba(230, 230, 230, 0.35)';
    ctx.lineWidth = 2.0;
    ctx.beginPath();
    ctx.arc(0, 1.8, arcRadius, 0.2, Math.PI - 0.2);
    ctx.stroke();

    ctx.restore();
  }

  // 5. Traces de lissage à la spatule / ébauchoir de modelage (stries parallèles estompées)
  for (let s = 0; s < 18; s++) {
    const sx = Math.random() * size;
    const sy = Math.random() * size;
    const sLen = 70 + Math.random() * 110;
    const sAngle = Math.random() * Math.PI * 2;

    ctx.save();
    ctx.translate(sx, sy);
    ctx.rotate(sAngle);

    for (let l = -12; l <= 12; l += 4) {
      const grad = ctx.createLinearGradient(0, l, sLen, l);
      grad.addColorStop(0, 'rgba(128,128,128,0)');
      grad.addColorStop(0.3, Math.random() > 0.5 ? 'rgba(210,210,210,0.22)' : 'rgba(50,50,50,0.20)');
      grad.addColorStop(0.7, Math.random() > 0.5 ? 'rgba(210,210,210,0.22)' : 'rgba(50,50,50,0.20)');
      grad.addColorStop(1, 'rgba(128,128,128,0)');

      ctx.strokeStyle = grad;
      ctx.lineWidth = 2.2;
      ctx.beginPath();
      ctx.moveTo(0, l);
      ctx.lineTo(sLen, l);
      ctx.stroke();
    }
    ctx.restore();
  }

  // 6. Micro-craquelures douces dans les zones de pliure
  for (let c = 0; c < 15; c++) {
    let px = Math.random() * size;
    let py = Math.random() * size;
    ctx.strokeStyle = 'rgba(40, 40, 40, 0.25)';
    ctx.lineWidth = 1.2;
    ctx.beginPath();
    ctx.moveTo(px, py);
    for (let step = 0; step < 8; step++) {
      px += (Math.random() - 0.5) * 18;
      py += (Math.random() - 0.5) * 18;
      ctx.lineTo(px, py);
    }
    ctx.stroke();
  }

  const bumpTex = new THREE.CanvasTexture(canvas);
  bumpTex.wrapS = THREE.RepeatWrapping;
  bumpTex.wrapT = THREE.RepeatWrapping;
  bumpTex.repeat.set(3, 3);
  bumpTex.needsUpdate = true;

  cachedBumpTexture = bumpTex;
  cachedRoughnessTexture = bumpTex;

  return { bumpMap: bumpTex, roughnessMap: bumpTex };
}

// Palette chromatique pâte à modeler "Astérix / Mikros Image"
export const CLAY_PALETTE = {
  skin: 0xf5cba7,
  skinShade: 0xedbb99,
  skinFlush: 0xf1948a, // Teinte rose des joues/nez
  gauloisBlue: 0x2471a3,
  gauloisBlueDark: 0x1a5276,
  gauloisRed: 0xb03a2e,
  gauloisOrange: 0xd35400,
  gauloisYellow: 0xf39c12,
  mustacheRed: 0xba4a00,
  mustacheBlonde: 0xf4d03f,
  mustacheBrown: 0x5d4037,
  tunicWhite: 0xf7f9f9,
  beltBrown: 0x6e2c00,
  blackEye: 0x1c2833,
  whiteEye: 0xfdfefe,
  turfGreen: 0x27ae60,
  turfGreenDark: 0x1e8449,
  candleWax: 0xfcf3cf,
  candleFlame: 0xf39c12,
  altarStone: 0x95a5a6,
  altarWood: 0x6e2c00,
  goldChalice: 0xf5b041,
  ballWhite: 0xf8f9f9,
  ballBlack: 0x17202a
};

/**
 * Matériau Pâte à Modeler AAA avec :
 * - Texture haute définition d'empreintes et micro-aspérités
 * - Rugosité réaliste (0.72 - 0.85)
 * - Faux Subsurface Scattering (SSS) injecté dans le shader :
 *   lueur chaude orangée/pêche sur les arêtes rétro-éclairées
 */
export function createClayMaterial(colorHex, options = {}) {
  const { bumpMap, roughnessMap } = generateClayTextures();

  const roughness = options.roughness !== undefined ? options.roughness : 0.78;
  const metalness = options.metalness !== undefined ? options.metalness : 0.03;
  const bumpScale = options.bumpScale !== undefined ? options.bumpScale : 0.035;

  const mat = new THREE.MeshStandardMaterial({
    color: colorHex,
    roughness: roughness,
    metalness: metalness,
    bumpMap: bumpMap,
    bumpScale: bumpScale,
    roughnessMap: roughnessMap,
    ...options
  });

  // Injection du Subsurface Scattering (SSS) simulé dans le pipeline GLSL
  mat.onBeforeCompile = (shader) => {
    shader.uniforms.sssIntensity = { value: 0.38 };
    shader.uniforms.sssColor = { value: new THREE.Color(0xff8c42) }; // Pêche / Terracotta chaud

    // Ajout des variables dans le vertex shader
    shader.vertexShader = shader.vertexShader.replace(
      '#include <common>',
      `#include <common>
       varying vec3 vWorldNormalClay;
       varying vec3 vViewDirClay;`
    );

    shader.vertexShader = shader.vertexShader.replace(
      '#include <worldpos_vertex>',
      `#include <worldpos_vertex>
       vWorldNormalClay = normalize(transformedNormal);
       vViewDirClay = normalize(-mvPosition.xyz);`
    );

    // Injection dans le fragment shader de la lueur de diffusion interne (SSS)
    shader.fragmentShader = shader.fragmentShader.replace(
      '#include <common>',
      `#include <common>
       uniform float sssIntensity;
       uniform vec3 sssColor;
       varying vec3 vWorldNormalClay;
       varying vec3 vViewDirClay;`
    );

    shader.fragmentShader = shader.fragmentShader.replace(
      '#include <dithering_fragment>',
      `#include <dithering_fragment>
       // Faux Subsurface Scattering sur les arêtes rétro-éclairées (effet pâte à modeler)
       float sssFresnel = 1.0 - max(dot(vWorldNormalClay, vViewDirClay), 0.0);
       sssFresnel = pow(sssFresnel, 3.0);
       vec3 sssGlow = sssColor * sssFresnel * sssIntensity;
       gl_FragColor.rgb += sssGlow * diffuseColor.rgb;`
    );
  };

  return mat;
}

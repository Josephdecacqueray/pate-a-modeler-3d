import * as THREE from 'three';
import { createClayMaterial, CLAY_PALETTE, generateClayTextures } from '../materials/clayMaterial.js';

let cachedObelixStripedTexture = null;

function getObelixStripedTexture() {
  if (cachedObelixStripedTexture) return cachedObelixStripedTexture;

  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 512;
  const ctx = canvas.getContext('2d');

  const numStripes = 16;
  const stripeWidth = canvas.width / numStripes;

  for (let i = 0; i < numStripes; i++) {
    ctx.fillStyle = (i % 2 === 0) ? '#2980b9' : '#fdfefe'; // Cyan / Blanc
    ctx.fillRect(i * stripeWidth, 0, stripeWidth, canvas.height);
  }

  // Légères bavures de peinture d'argile artisanale sur les bordures de rayures
  for (let s = 0; s < numStripes; s++) {
    const x = s * stripeWidth;
    ctx.strokeStyle = 'rgba(0, 0, 0, 0.08)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, canvas.height);
    ctx.stroke();
  }

  const tex = new THREE.CanvasTexture(canvas);
  tex.wrapS = THREE.RepeatWrapping;
  tex.wrapT = THREE.ClampToEdgeWrapping;
  tex.repeat.set(1, 1);
  tex.needsUpdate = true;
  cachedObelixStripedTexture = tex;
  return tex;
}

export class ClayCharacter {
  /**
   * @param {'A' | 'B'} id - 'A' (Astériclos) ou 'B' (Obélicon)
   * @param {object} options
   */
  constructor(id, options = {}) {
    this.id = id;
    this.name = options.name || (id === 'A' ? 'Astériclos' : 'Obélicon');
    this.scale = options.scale || (id === 'A' ? 0.95 : 1.28);

    this.group = new THREE.Group();
    this.group.name = `ClayCharacter_${id}`;

    // Quantification stricte à 20 FPS (Stop-Motion artisanal)
    this.fps = 20;
    this.animTime = 0;
    this.quantizedTime = 0;
    this.currentAction = 'idle';
    this.actionProgress = 0;

    this.parts = {};
    this._buildSculptedFigure();
  }

  _buildSculptedFigure() {
    this.root = new THREE.Group();
    this.group.add(this.root);

    // Matériaux d'argile
    const matSkin = createClayMaterial(this.id === 'A' ? CLAY_PALETTE.skin : CLAY_PALETTE.skinObelix, { roughness: 0.82 });
    const matNose = createClayMaterial(CLAY_PALETTE.skinFlush, { roughness: 0.80 });
    const matWhite = createClayMaterial(CLAY_PALETTE.wingsWhite, { roughness: 0.70 });
    const matBlack = createClayMaterial(CLAY_PALETTE.ballBlack, { roughness: 0.65 });
    const matBeltGreen = createClayMaterial(CLAY_PALETTE.beltGreen, { roughness: 0.82 });
    const matGold = createClayMaterial(CLAY_PALETTE.goldRivets, { roughness: 0.45, metalness: 0.35 });
    const matHelmet = createClayMaterial(CLAY_PALETTE.helmetGrey, { roughness: 0.55, metalness: 0.32 });
    const matShoes = createClayMaterial(CLAY_PALETTE.shoesBrown, { roughness: 0.88 });

    // 1. Bassin & Corps
    this.pelvis = new THREE.Group();
    this.pelvis.position.y = (this.id === 'A' ? 0.78 : 0.86) * this.scale;
    this.root.add(this.pelvis);

    if (this.id === 'A') {
      // --- ASTÉRICLOS : Haut noir sans manche, braies rouges, ceinture verte à clous d'or ---
      const matTop = createClayMaterial(CLAY_PALETTE.topBlack, { roughness: 0.86 });
      const matPants = createClayMaterial(CLAY_PALETTE.pantsRed, { roughness: 0.85 });

      // Torse court et vigoureux (haut noir)
      const torsoGeom = new THREE.SphereGeometry(0.44 * this.scale, 24, 20);
      torsoGeom.scale(1.0, 1.15, 0.88);
      const torso = new THREE.Mesh(torsoGeom, matTop);
      torso.castShadow = true;
      torso.receiveShadow = true;
      this.pelvis.add(torso);

      // Ceinture verte avec rivets dorés
      const beltGeom = new THREE.CylinderGeometry(0.45 * this.scale, 0.46 * this.scale, 0.12 * this.scale, 24);
      const belt = new THREE.Mesh(beltGeom, matBeltGreen);
      belt.position.y = -0.16 * this.scale;
      this.pelvis.add(belt);

      // Rivets dorés sur la ceinture
      for (let r = 0; r < 8; r++) {
        const theta = (r / 8) * Math.PI * 2;
        const rivet = new THREE.Mesh(new THREE.SphereGeometry(0.028 * this.scale, 8, 8), matGold);
        rivet.position.set(Math.cos(theta) * 0.46 * this.scale, -0.16 * this.scale, Math.sin(theta) * 0.46 * this.scale);
        this.pelvis.add(rivet);
      }

      // Boucle ovale dorée au centre
      const buckle = new THREE.Mesh(new THREE.BoxGeometry(0.14 * this.scale, 0.14 * this.scale, 0.08 * this.scale), matGold);
      buckle.position.set(0, -0.16 * this.scale, 0.46 * this.scale);
      this.pelvis.add(buckle);

      // Fourreau d'épée gauloise sur le côté
      const scabbard = new THREE.Group();
      scabbard.position.set(-0.48 * this.scale, -0.22 * this.scale, 0.10 * this.scale);
      scabbard.rotation.z = 0.35;
      const scabbardBody = new THREE.Mesh(new THREE.BoxGeometry(0.08 * this.scale, 0.42 * this.scale, 0.06 * this.scale), matShoes);
      scabbard.add(scabbardBody);
      const hilt = new THREE.Mesh(new THREE.CylinderGeometry(0.03 * this.scale, 0.03 * this.scale, 0.14 * this.scale, 8), matGold);
      hilt.position.y = 0.26 * this.scale;
      scabbard.add(hilt);
      this.pelvis.add(scabbard);

      // Braies rouges sculptées
      const pantsGeom = new THREE.SphereGeometry(0.43 * this.scale, 20, 16);
      pantsGeom.scale(1.02, 0.75, 0.95);
      const pants = new THREE.Mesh(pantsGeom, matPants);
      pants.position.y = -0.32 * this.scale;
      pants.castShadow = true;
      pants.receiveShadow = true;
      this.pelvis.add(pants);

    } else {
      // --- OBÉLICON : Torse nu colossal, braies à rayures verticales bleu/blanc, ceinture verte à boucle ronde ---
      // 1. Torse nu massif (peau d'argile pêche avec modelage des épaules et du buste)
      const torsoGroup = new THREE.Group();
      this.pelvis.add(torsoGroup);

      const chestGeom = new THREE.SphereGeometry(0.72 * this.scale, 32, 24);
      chestGeom.scale(1.15, 1.10, 1.05);
      const chestMesh = new THREE.Mesh(chestGeom, matSkin);
      chestMesh.position.y = 0.28 * this.scale;
      chestMesh.castShadow = true;
      chestMesh.receiveShadow = true;
      torsoGroup.add(chestMesh);

      // Pectoraux arrondis en pâte à modeler
      [-0.24, 0.24].forEach(px => {
        const pecGeom = new THREE.SphereGeometry(0.24 * this.scale, 16, 12);
        pecGeom.scale(1.1, 0.85, 0.9);
        const pec = new THREE.Mesh(pecGeom, matSkin);
        pec.position.set(px * this.scale, 0.38 * this.scale, 0.58 * this.scale);
        torsoGroup.add(pec);
      });

      // 2. Braies à rayures verticales cyan/blanc (Texture procédurale avec SSS et Bump)
      const stripedTex = getObelixStripedTexture();
      const { bumpMap, normalMap } = generateClayTextures();
      const matStripedPants = new THREE.MeshStandardMaterial({
        map: stripedTex,
        bumpMap: bumpMap,
        bumpScale: 0.04,
        normalMap: normalMap,
        normalScale: new THREE.Vector2(0.4, 0.4),
        roughness: 0.84,
        metalness: 0.02
      });

      const bellyGeom = new THREE.SphereGeometry(0.85 * this.scale, 32, 28);
      bellyGeom.scale(1.18, 1.25, 1.12);
      const belly = new THREE.Mesh(bellyGeom, matStripedPants);
      belly.position.y = -0.32 * this.scale;
      belly.castShadow = true;
      belly.receiveShadow = true;
      this.pelvis.add(belly);

      // 3. Ceinture verte iconique à studs dorés
      const obelixBeltGeom = new THREE.CylinderGeometry(0.96 * this.scale, 0.98 * this.scale, 0.22 * this.scale, 32);
      const obelixBelt = new THREE.Mesh(obelixBeltGeom, matBeltGreen);
      obelixBelt.position.y = 0.12 * this.scale;
      obelixBelt.castShadow = true;
      this.pelvis.add(obelixBelt);

      // 8 gros studs dorés tout autour de la ceinture
      for (let s = 0; s < 10; s++) {
        const theta = (s / 10) * Math.PI * 2;
        const stud = new THREE.Mesh(new THREE.CylinderGeometry(0.048 * this.scale, 0.048 * this.scale, 0.04 * this.scale, 12), matGold);
        stud.rotation.x = Math.PI / 2;
        stud.rotation.z = -theta + Math.PI / 2;
        stud.position.set(Math.cos(theta) * 0.98 * this.scale, 0.12 * this.scale, Math.sin(theta) * 0.98 * this.scale);
        this.pelvis.add(stud);
      }

      // Boucle circulaire dorée avec centre bleu au nombril
      const buckleRing = new THREE.Mesh(
        new THREE.TorusGeometry(0.14 * this.scale, 0.045 * this.scale, 10, 24),
        matGold
      );
      buckleRing.position.set(0, 0.12 * this.scale, 0.99 * this.scale);
      this.pelvis.add(buckleRing);

      const buckleCenter = new THREE.Mesh(
        new THREE.CylinderGeometry(0.09 * this.scale, 0.09 * this.scale, 0.04 * this.scale, 16),
        matHelmet
      );
      buckleCenter.rotation.x = Math.PI / 2;
      buckleCenter.position.set(0, 0.12 * this.scale, 0.98 * this.scale);
      this.pelvis.add(buckleCenter);
    }

    // Cou modelé en argile pour Obélix
    if (this.id === 'B') {
      const neckGeom = new THREE.CylinderGeometry(0.32 * this.scale, 0.40 * this.scale, 0.35 * this.scale, 16);
      const neck = new THREE.Mesh(neckGeom, matSkin);
      neck.position.y = 0.95 * this.scale;
      neck.castShadow = true;
      neck.receiveShadow = true;
      this.pelvis.add(neck);
    }

    // 2. Tête & Visage Expressif
    this.head = new THREE.Group();
    this.head.position.y = (this.id === 'A' ? 0.88 : 1.22) * this.scale;
    this.pelvis.add(this.head);

    // Boîte crânienne modelée
    const craniumGeom = new THREE.SphereGeometry(0.38 * this.scale, 24, 20);
    craniumGeom.scale(1.0, 1.06, 1.02);
    const cranium = new THREE.Mesh(craniumGeom, matSkin);
    cranium.castShadow = true;
    cranium.receiveShadow = true;
    this.head.add(cranium);

    // Joues rebondies
    [-0.20, 0.20].forEach(cx => {
      const cheekGeom = new THREE.SphereGeometry(0.16 * this.scale, 14, 12);
      cheekGeom.scale(1.05, 0.95, 1.15);
      const cheek = new THREE.Mesh(cheekGeom, matNose);
      cheek.position.set(cx * this.scale, -0.06 * this.scale, 0.26 * this.scale);
      this.head.add(cheek);
    });

    // Gros nez bulbeux modelé Uderzo
    const noseGeom = new THREE.SphereGeometry(this.id === 'A' ? 0.23 * this.scale : 0.26 * this.scale, 20, 16);
    noseGeom.scale(1.15, 1.0, 1.30);
    this.nose = new THREE.Mesh(noseGeom, matNose);
    this.nose.position.set(0, 0.03 * this.scale, 0.38 * this.scale);
    this.nose.castShadow = true;
    this.head.add(this.nose);

    // Yeux expressifs
    this.eyes = new THREE.Group();
    this.head.add(this.eyes);

    [-0.13, 0.13].forEach((ex, idx) => {
      const eyeGroup = new THREE.Group();
      eyeGroup.position.set(ex * this.scale, 0.18 * this.scale, 0.32 * this.scale);

      const eyeball = new THREE.Mesh(new THREE.SphereGeometry(0.095 * this.scale, 16, 14), matWhite);
      eyeball.scale.set(0.9, 1.1, 0.9);
      eyeGroup.add(eyeball);

      const pupil = new THREE.Mesh(new THREE.SphereGeometry(0.045 * this.scale, 10, 10), matBlack);
      pupil.position.set(0, 0, 0.082 * this.scale);
      eyeball.add(pupil);

      // Paupière tombante
      const eyelidGeom = new THREE.SphereGeometry(0.102 * this.scale, 12, 10, 0, Math.PI * 2, 0, Math.PI * 0.48);
      const eyelid = new THREE.Mesh(eyelidGeom, matSkin);
      eyelid.rotation.x = this.id === 'B' ? -0.48 : -0.32;
      eyeGroup.add(eyelid);

      this.eyes.add(eyeGroup);
    });

    // Moustaches Uderzo sculptées
    const matMustache = createClayMaterial(this.id === 'A' ? CLAY_PALETTE.mustacheBlonde : CLAY_PALETTE.mustacheRed, { roughness: 0.84 });
    this.mustache = new THREE.Group();
    this.mustache.position.set(0, -0.07 * this.scale, 0.36 * this.scale);
    this.head.add(this.mustache);

    [-1, 1].forEach((side) => {
      const tuft = new THREE.Group();
      const m1 = new THREE.Mesh(new THREE.ConeGeometry(0.14 * this.scale, 0.50 * this.scale, 12), matMustache);
      m1.rotation.z = side * 1.38;
      m1.scale.set(1.15, 0.65, 1.30);
      m1.position.set(side * 0.20 * this.scale, 0, 0);
      m1.castShadow = true;
      tuft.add(m1);

      const m2 = new THREE.Mesh(new THREE.ConeGeometry(0.10 * this.scale, 0.38 * this.scale, 10), matMustache);
      m2.rotation.z = side * 1.58;
      m2.position.set(side * 0.16 * this.scale, -0.08 * this.scale, 0.04 * this.scale);
      tuft.add(m2);

      this.mustache.add(tuft);
    });

    // Bouche creusée
    this.mouthGroup = new THREE.Group();
    this.mouthGroup.position.set(0, -0.22 * this.scale, 0.34 * this.scale);
    this.head.add(this.mouthGroup);
    const mouthCavity = new THREE.Mesh(new THREE.BoxGeometry(0.16 * this.scale, 0.08 * this.scale, 0.07 * this.scale), matBlack);
    this.mouthGroup.add(mouthCavity);

    // Sourcils
    this.eyebrows = new THREE.Group();
    this.head.add(this.eyebrows);
    [-0.14, 0.14].forEach((bx, i) => {
      const brow = new THREE.Mesh(new THREE.BoxGeometry(0.15 * this.scale, 0.05 * this.scale, 0.07 * this.scale), matMustache);
      brow.position.set(bx * this.scale, 0.31 * this.scale, 0.34 * this.scale);
      brow.rotation.z = i === 0 ? 0.15 : -0.15;
      this.eyebrows.add(brow);
    });

    // Casques et coiffures gauloises
    if (this.id === 'A') {
      // --- CASQUE AILÉ D'ASTÉRIX ---
      const helmetGeom = new THREE.SphereGeometry(0.41 * this.scale, 24, 18, 0, Math.PI * 2, 0, Math.PI * 0.52);
      const helmet = new THREE.Mesh(helmetGeom, matHelmet);
      helmet.position.y = 0.08 * this.scale;
      this.head.add(helmet);

      // Rivets du casque
      for (let r = 0; r < 8; r++) {
        const rivet = new THREE.Mesh(new THREE.SphereGeometry(0.025 * this.scale, 6, 6), matGold);
        const theta = (r / 8) * Math.PI * 2;
        rivet.position.set(Math.cos(theta) * 0.40 * this.scale, 0.08 * this.scale, Math.sin(theta) * 0.40 * this.scale);
        this.head.add(rivet);
      }

      // Vraies ailes blanches épaisses en argile (courbées vers le haut et l'extérieur)
      [-1, 1].forEach((side) => {
        const wingGroup = new THREE.Group();
        wingGroup.position.set(side * 0.38 * this.scale, 0.30 * this.scale, 0);

        for (let w = 0; w < 3; w++) {
          const feather = new THREE.Mesh(new THREE.ConeGeometry(0.09 * this.scale, 0.44 * this.scale, 10), matWhite);
          feather.rotation.z = side * (0.35 + w * 0.20);
          feather.rotation.x = -w * 0.12;
          feather.position.set(side * w * 0.07 * this.scale, w * 0.06 * this.scale, 0);
          feather.castShadow = true;
          wingGroup.add(feather);
        }
        this.head.add(wingGroup);
      });

      // Mèches de cheveux blonds qui dépassent du casque
      [-0.28, 0.28].forEach(hx => {
        const hairTuft = new THREE.Mesh(new THREE.ConeGeometry(0.09 * this.scale, 0.28 * this.scale, 8), matMustache);
        hairTuft.position.set(hx * this.scale, 0, -0.15 * this.scale);
        hairTuft.rotation.x = -0.5;
        this.head.add(hairTuft);
      });

    } else {
      // --- PETIT CASQUE & TRESSES ROUSSES D'OBÉLIX ---
      // Petit casque rond au sommet du crâne
      const tinyHelmet = new THREE.Mesh(
        new THREE.SphereGeometry(0.24 * this.scale, 16, 12, 0, Math.PI * 2, 0, Math.PI * 0.52),
        matHelmet
      );
      tinyHelmet.position.y = 0.34 * this.scale;
      this.head.add(tinyHelmet);

      const tinySpike = new THREE.Mesh(new THREE.ConeGeometry(0.05 * this.scale, 0.12 * this.scale, 8), matHelmet);
      tinySpike.position.y = 0.44 * this.scale;
      this.head.add(tinySpike);

      // Tresses rousses avec petits nœuds noirs (Style "Le Domaine des Dieux")
      const matBraidHair = createClayMaterial(CLAY_PALETTE.braidsOrange, { roughness: 0.84 });
      const matBlackBow = createClayMaterial(CLAY_PALETTE.braidBowBlack, { roughness: 0.75 });

      [-1, 1].forEach((side) => {
        const braidGroup = new THREE.Group();
        braidGroup.position.set(side * 0.38 * this.scale, 0.06 * this.scale, 0.08 * this.scale);

        for (let b = 0; b < 6; b++) {
          const seg = new THREE.Mesh(new THREE.SphereGeometry(0.075 * this.scale, 10, 8), matBraidHair);
          seg.scale.set(1.0, 1.35, 0.95);
          seg.position.set(0, -b * 0.14 * this.scale, 0);
          seg.castShadow = true;
          braidGroup.add(seg);
        }

        // Petit nœud papillon noir au bout de chaque tresse
        const bow = new THREE.Group();
        bow.position.y = -0.84 * this.scale;

        const knot = new THREE.Mesh(new THREE.SphereGeometry(0.038 * this.scale, 8, 8), matBlackBow);
        bow.add(knot);

        [-1, 1].forEach(bs => {
          const wing = new THREE.Mesh(new THREE.ConeGeometry(0.045 * this.scale, 0.10 * this.scale, 8), matBlackBow);
          wing.rotation.z = bs * Math.PI / 2;
          wing.position.x = bs * 0.05 * this.scale;
          bow.add(wing);
        });

        braidGroup.add(bow);
        this.head.add(braidGroup);
      });
    }

    // 3. Bras sculptés (Astérix : haut noir / bras nus ; Obélix : bras nus massifs)
    const armMatSleeve = (this.id === 'A') ? createClayMaterial(CLAY_PALETTE.topBlack, { roughness: 0.85 }) : matSkin;
    this.leftArm = this._createDetailedArm(1, matSkin, armMatSleeve);
    this.rightArm = this._createDetailedArm(-1, matSkin, armMatSleeve);
    this.pelvis.add(this.leftArm.shoulder);
    this.pelvis.add(this.rightArm.shoulder);

    // 4. Jambes courtes et sabots d'argile
    const matLegs = (this.id === 'A') ? createClayMaterial(CLAY_PALETTE.pantsRed, { roughness: 0.85 }) : matSkin;
    this.leftLeg = this._createDetailedLeg(1, matLegs, matShoes);
    this.rightLeg = this._createDetailedLeg(-1, matLegs, matShoes);
    this.pelvis.add(this.leftLeg.hip);
    this.pelvis.add(this.rightLeg.hip);

    this.parts = {
      root: this.root,
      pelvis: this.pelvis,
      head: this.head,
      mouthGroup: this.mouthGroup,
      eyebrows: this.eyebrows,
      mustache: this.mustache,
      nose: this.nose,
      leftArm: this.leftArm,
      rightArm: this.rightArm,
      leftLeg: this.leftLeg,
      rightLeg: this.rightLeg
    };
  }

  _createDetailedArm(side, matSkin, matSleeve) {
    const shoulder = new THREE.Group();
    const shoulderX = (this.id === 'A' ? 0.48 : 0.78) * this.scale;
    const shoulderY = (this.id === 'A' ? 0.42 : 0.65) * this.scale;
    shoulder.position.set(side * shoulderX, shoulderY, 0);

    const armRadius = (this.id === 'A' ? 0.12 : 0.20) * this.scale;
    const armLength = (this.id === 'A' ? 0.36 : 0.48) * this.scale;

    // Épaule renflée
    const shoulderBulge = new THREE.Mesh(new THREE.SphereGeometry(armRadius * 1.25, 14, 12), matSleeve);
    shoulderBulge.castShadow = true;
    shoulder.add(shoulderBulge);

    // Bras supérieur
    const upperArm = new THREE.Mesh(new THREE.CylinderGeometry(armRadius, armRadius * 0.92, armLength, 14), matSkin);
    upperArm.position.y = -armLength * 0.5;
    upperArm.castShadow = true;
    shoulder.add(upperArm);

    // Coude
    const elbow = new THREE.Group();
    elbow.position.y = -armLength;
    shoulder.add(elbow);

    const elbowBulge = new THREE.Mesh(new THREE.SphereGeometry(armRadius * 0.95, 10, 8), matSkin);
    elbow.add(elbowBulge);

    // Avant-bras
    const forearm = new THREE.Mesh(new THREE.CylinderGeometry(armRadius * 0.92, armRadius * 0.85, armLength * 0.9, 14), matSkin);
    forearm.position.y = -armLength * 0.45;
    forearm.castShadow = true;
    elbow.add(forearm);

    // Main et 4 doigts façonnés individuellement
    const hand = new THREE.Group();
    hand.position.y = -armLength * 0.9;
    elbow.add(hand);

    const palmSize = armRadius * 1.35;
    const palm = new THREE.Mesh(new THREE.BoxGeometry(palmSize, palmSize * 0.9, palmSize * 0.7), matSkin);
    palm.castShadow = true;
    hand.add(palm);

    // Pouce
    const thumb = new THREE.Group();
    thumb.position.set(side * palmSize * 0.55, 0, palmSize * 0.25);
    const thumbMesh = new THREE.Mesh(new THREE.CylinderGeometry(armRadius * 0.28, armRadius * 0.24, armLength * 0.32, 8), matSkin);
    thumbMesh.rotation.z = side * 0.65;
    thumb.add(thumbMesh);
    hand.add(thumb);

    // 3 Doigts
    [-0.32, 0.0, 0.32].forEach((fx) => {
      const finger = new THREE.Group();
      finger.position.set(fx * palmSize * 0.8, -palmSize * 0.55, 0);
      const fMesh = new THREE.Mesh(new THREE.CylinderGeometry(armRadius * 0.25, armRadius * 0.22, armLength * 0.35, 8), matSkin);
      fMesh.position.y = -armLength * 0.17;
      fMesh.castShadow = true;
      finger.add(fMesh);
      hand.add(finger);
    });

    return { shoulder, elbow, hand };
  }

  _createDetailedLeg(side, matPants, matShoes) {
    const hip = new THREE.Group();
    const hipX = (this.id === 'A' ? 0.22 : 0.38) * this.scale;
    const hipY = (this.id === 'A' ? -0.38 : -0.65) * this.scale;
    hip.position.set(side * hipX, hipY, 0);

    const legRadius = (this.id === 'A' ? 0.13 : 0.22) * this.scale;
    const legLength = (this.id === 'A' ? 0.34 : 0.40) * this.scale;

    // Cuisse / Braie
    const thigh = new THREE.Mesh(new THREE.CylinderGeometry(legRadius * 1.15, legRadius * 0.95, legLength, 14), matPants);
    thigh.position.y = -legLength * 0.5;
    thigh.castShadow = true;
    hip.add(thigh);

    // Genou
    const knee = new THREE.Group();
    knee.position.y = -legLength;
    hip.add(knee);

    // Tibia
    const shin = new THREE.Mesh(new THREE.CylinderGeometry(legRadius * 0.95, legRadius * 0.88, legLength * 0.85, 14), matPants);
    shin.position.y = -legLength * 0.42;
    shin.castShadow = true;
    knee.add(shin);

    // Sabot / Chaussure gauloise en argile marron
    const shoe = new THREE.Group();
    shoe.position.set(0, -legLength * 0.85, 0.08 * this.scale);
    knee.add(shoe);

    const shoeMesh = new THREE.Mesh(new THREE.SphereGeometry(legRadius * 1.15, 14, 10), matShoes);
    shoeMesh.scale.set(1.0, 0.65, 1.6);
    shoeMesh.castShadow = true;
    shoeMesh.receiveShadow = true;
    shoe.add(shoeMesh);

    return { hip, knee, shoe };
  }

  setAction(actionName) {
    this.currentAction = actionName;
    this.actionProgress = 0;
  }

  update(delta) {
    this.animTime += delta;
    this.actionProgress += delta;

    // Quantification temporelle exacte à 20 FPS pour l'animation stop-motion
    const quantized = Math.floor(this.animTime * this.fps) / this.fps;
    this.quantizedTime = quantized;

    const t = quantized;
    const action = this.currentAction;

    // Réinitialisation douce des rotations de base
    this.pelvis.position.y = (this.id === 'A' ? 0.78 : 0.86) * this.scale + Math.sin(t * 3.0) * 0.015;
    this.head.position.y = (this.id === 'A' ? 0.88 : 1.22) * this.scale;

    // Animation selon l'action active
    if (action === 'talk') {
      // Expression loquace : tête qui oscille, bouche qui s'ouvre, bras qui gesticulent
      const talkCycle = Math.sin(t * 14.0);
      this.mouthGroup.scale.y = 0.7 + talkCycle * 0.5;
      this.head.rotation.y = Math.sin(t * 4.0) * 0.18;
      this.head.rotation.x = Math.sin(t * 6.0) * 0.08;
      this.mustache.rotation.z = Math.sin(t * 12.0) * 0.06;

      this.rightArm.shoulder.rotation.x = -0.6 + Math.sin(t * 7.0) * 0.35;
      this.rightArm.elbow.rotation.x = -0.8 + Math.cos(t * 8.0) * 0.40;
      this.leftArm.shoulder.rotation.x = -0.2 + Math.cos(t * 5.0) * 0.20;

    } else if (action === 'think') {
      // Réflexion : main au menton, tête penchée, sourcils froncés
      this.mouthGroup.scale.y = 0.3;
      this.head.rotation.z = (this.id === 'A' ? 0.14 : -0.14);
      this.head.rotation.x = 0.12;

      this.rightArm.shoulder.rotation.x = -1.35;
      this.rightArm.shoulder.rotation.z = -0.35;
      this.rightArm.elbow.rotation.x = -1.45;

      this.leftArm.shoulder.rotation.x = -0.15;
      this.leftArm.elbow.rotation.x = -0.25;

    } else if (action === 'shrug') {
      // Haussement d'épaules comique
      this.mouthGroup.scale.y = 0.4;
      this.head.position.y = (this.id === 'A' ? 0.82 : 1.15) * this.scale;
      this.head.rotation.x = -0.15;

      this.leftArm.shoulder.rotation.z = 0.75;
      this.leftArm.shoulder.rotation.x = -0.45;
      this.leftArm.elbow.rotation.x = -0.85;

      this.rightArm.shoulder.rotation.z = -0.75;
      this.rightArm.shoulder.rotation.x = -0.45;
      this.rightArm.elbow.rotation.x = -0.85;

    } else if (action === 'kick') {
      // Frappe puissante de football
      const kickT = Math.min(1.0, this.actionProgress * 2.5);
      const legAngle = Math.sin(kickT * Math.PI) * 1.35;
      this.rightLeg.hip.rotation.x = -legAngle;
      this.pelvis.rotation.y = -Math.sin(kickT * Math.PI) * 0.45;

    } else if (action === 'celebrate') {
      // Danse de la victoire (bras en l'air et sauts de cabri)
      this.pelvis.position.y += Math.abs(Math.sin(t * 8.0)) * 0.18 * this.scale;
      this.leftArm.shoulder.rotation.x = -2.8 + Math.sin(t * 10.0) * 0.3;
      this.rightArm.shoulder.rotation.x = -2.8 + Math.cos(t * 10.0) * 0.3;
      this.head.rotation.y = Math.sin(t * 8.0) * 0.25;

    } else if (action === 'prayTridentine') {
      // Agenouillement solennel et battement de coulpe
      this.pelvis.position.y = (this.id === 'A' ? 0.48 : 0.55) * this.scale;
      this.leftLeg.hip.rotation.x = 1.1;
      this.rightLeg.hip.rotation.x = 1.1;
      this.leftLeg.knee.rotation.x = -1.6;
      this.rightLeg.knee.rotation.x = -1.6;

      this.head.rotation.x = 0.32; // Tête inclinée
      // Battement de coulpe au thorax
      const strike = Math.max(0, Math.sin(t * 3.5));
      this.rightArm.shoulder.rotation.x = -1.1 - strike * 0.35;
      this.rightArm.shoulder.rotation.z = -0.45;
      this.rightArm.elbow.rotation.x = -1.45;

      this.leftArm.shoulder.rotation.x = -0.85;
      this.leftArm.elbow.rotation.x = -0.95;

    } else if (action === 'praiseEmmanuel') {
      // Louange charismatique : bras en orante, balancements et battements de mains
      const sway = Math.sin(t * 3.2);
      this.pelvis.rotation.z = sway * 0.08;
      this.pelvis.position.y += Math.abs(Math.sin(t * 6.4)) * 0.04;

      // Bras en orante
      this.leftArm.shoulder.rotation.x = -2.2 + Math.sin(t * 4.0) * 0.15;
      this.leftArm.shoulder.rotation.z = 0.65;
      this.leftArm.elbow.rotation.x = -0.75;

      this.rightArm.shoulder.rotation.x = -2.2 + Math.sin(t * 4.0) * 0.15;
      this.rightArm.shoulder.rotation.z = -0.65;
      this.rightArm.elbow.rotation.x = -0.75;

      this.head.rotation.x = -0.25; // Regard levé vers le ciel

    } else {
      // Idle vivant : respiration stop-motion d'argile
      const breath = Math.sin(t * 2.5);
      this.head.rotation.x = breath * 0.03;
      this.head.rotation.y = Math.sin(t * 1.2) * 0.05;
      this.leftArm.shoulder.rotation.x = -0.15 + breath * 0.04;
      this.rightArm.shoulder.rotation.x = -0.15 - breath * 0.04;
      this.leftArm.elbow.rotation.x = -0.22;
      this.rightArm.elbow.rotation.x = -0.22;
      this.mouthGroup.scale.y = 0.4;
    }
  }
}

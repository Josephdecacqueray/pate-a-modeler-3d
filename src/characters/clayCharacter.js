import * as THREE from 'three';
import { createClayMaterial, CLAY_PALETTE } from '../materials/clayMaterial.js';

export class ClayCharacter {
  /**
   * @param {'A' | 'B'} id - 'A' (Astériclos) ou 'B' (Obélicon)
   * @param {object} options
   */
  constructor(id, options = {}) {
    this.id = id;
    this.name = options.name || (id === 'A' ? 'Astériclos' : 'Obélicon');
    this.tunicColor = options.tunicColor || (id === 'A' ? CLAY_PALETTE.gauloisBlue : CLAY_PALETTE.tunicWhite);
    this.mustacheColor = options.mustacheColor || (id === 'A' ? CLAY_PALETTE.mustacheRed : CLAY_PALETTE.mustacheBlonde);
    this.scale = options.scale || (id === 'A' ? 0.98 : 1.25);

    this.group = new THREE.Group();
    this.group.name = `ClayCharacter_${id}`;

    // Cadence exacte de 20 FPS pour le stop-motion artisanal
    this.fps = 20;
    this.animTime = 0;
    this.quantizedTime = 0;
    this.currentAction = 'idle';
    this.actionProgress = 0;

    this.parts = {};
    this._buildSculptedMesh();
  }

  _buildSculptedMesh() {
    const matSkin = createClayMaterial(CLAY_PALETTE.skin, { roughness: 0.76 });
    const matNose = createClayMaterial(CLAY_PALETTE.skinFlush, { roughness: 0.74 });
    const matTunic = createClayMaterial(this.tunicColor, { roughness: 0.80 });
    const matMustache = createClayMaterial(this.mustacheColor, { roughness: 0.82 });
    const matBelt = createClayMaterial(CLAY_PALETTE.beltBrown, { roughness: 0.75 });
    const matWhite = createClayMaterial(CLAY_PALETTE.whiteEye, { roughness: 0.60 });
    const matBlack = createClayMaterial(CLAY_PALETTE.blackEye, { roughness: 0.50 });
    const matPants = createClayMaterial(this.id === 'A' ? CLAY_PALETTE.gauloisRed : CLAY_PALETTE.gauloisBlue, { roughness: 0.82 });
    const matGold = createClayMaterial(CLAY_PALETTE.goldChalice, { roughness: 0.40, metalness: 0.4 });
    const matGourd = createClayMaterial(0x935116, { roughness: 0.85 });

    this.root = new THREE.Group();
    this.group.add(this.root);

    // 1. Bassin & Torse ventripotent sculpté
    this.pelvis = new THREE.Group();
    this.pelvis.position.y = 0.84 * this.scale;
    this.root.add(this.pelvis);

    const torsoGeom = new THREE.SphereGeometry(0.58 * this.scale, 28, 24);
    torsoGeom.scale(1.08, 1.25, 0.98);
    const torsoMesh = new THREE.Mesh(torsoGeom, matTunic);
    torsoMesh.castShadow = true;
    torsoMesh.receiveShadow = true;
    this.pelvis.add(torsoMesh);

    // Rayures bleues et blanches d'Obélix
    if (this.id === 'B') {
      for (let s = -2; s <= 2; s++) {
        const stripeGeom = new THREE.TorusGeometry(0.57 * this.scale, 0.042 * this.scale, 8, 32);
        stripeGeom.rotateX(Math.PI / 2);
        const stripeMat = createClayMaterial(CLAY_PALETTE.gauloisBlue, { roughness: 0.78 });
        const stripe = new THREE.Mesh(stripeGeom, stripeMat);
        stripe.position.y = (s * 0.17) * this.scale;
        this.pelvis.add(stripe);
      }
    }

    // Ceinturon en cuir avec boucle dorée
    const beltGeom = new THREE.CylinderGeometry(0.58 * this.scale, 0.59 * this.scale, 0.16 * this.scale, 28);
    const belt = new THREE.Mesh(beltGeom, matBelt);
    belt.position.y = -0.16 * this.scale;
    this.pelvis.add(belt);

    const buckleOuter = new THREE.Mesh(
      new THREE.BoxGeometry(0.24 * this.scale, 0.18 * this.scale, 0.09 * this.scale),
      matGold
    );
    buckleOuter.position.set(0, -0.16 * this.scale, 0.58 * this.scale);
    this.pelvis.add(buckleOuter);

    const buckleInner = new THREE.Mesh(
      new THREE.BoxGeometry(0.13 * this.scale, 0.10 * this.scale, 0.10 * this.scale),
      matBelt
    );
    buckleOuter.add(buckleInner);

    // Gourde en pâte à la ceinture
    const gourd = new THREE.Group();
    gourd.position.set(0.52 * this.scale, -0.22 * this.scale, 0.20 * this.scale);
    const gourdBody = new THREE.Mesh(new THREE.SphereGeometry(0.13 * this.scale, 14, 12), matGourd);
    gourdBody.scale.set(1, 1.25, 0.9);
    gourd.add(gourdBody);
    const gourdCork = new THREE.Mesh(new THREE.CylinderGeometry(0.04 * this.scale, 0.04 * this.scale, 0.07 * this.scale, 8), matBelt);
    gourdCork.position.y = 0.15 * this.scale;
    gourd.add(gourdCork);
    this.pelvis.add(gourd);

    // 2. Tête sculptée (Style "Le Domaine des Dieux")
    this.head = new THREE.Group();
    // Cou gaulois plus trapu pour Obélix
    this.head.position.y = (this.id === 'B' ? 0.78 : 0.86) * this.scale;
    this.pelvis.add(this.head);

    const craniumGeom = new THREE.SphereGeometry(0.42 * this.scale, 28, 24);
    craniumGeom.scale(1.02, 1.08, 1.0);
    const craniumMesh = new THREE.Mesh(craniumGeom, matSkin);
    craniumMesh.castShadow = true;
    craniumMesh.receiveShadow = true;
    this.head.add(craniumMesh);

    // Joues rebondies et joufflues
    [-0.22, 0.22].forEach(x => {
      const cheekGeom = new THREE.SphereGeometry(0.16 * this.scale, 14, 12);
      cheekGeom.scale(1.1, 0.95, 1.2);
      const cheek = new THREE.Mesh(cheekGeom, matNose);
      cheek.position.set(x * this.scale, -0.05 * this.scale, 0.28 * this.scale);
      this.head.add(cheek);
    });

    // Gros nez rond et tombant façon Uderzo
    const noseRoot = new THREE.Group();
    noseRoot.position.set(0, 0.04 * this.scale, 0.40 * this.scale);
    this.head.add(noseRoot);

    const noseGeom = new THREE.SphereGeometry(0.22 * this.scale, 20, 16);
    noseGeom.scale(1.22, 1.0, 1.35);
    const noseMesh = new THREE.Mesh(noseGeom, matNose);
    noseMesh.castShadow = true;
    noseRoot.add(noseMesh);

    [-0.11, 0.11].forEach(nx => {
      const nostril = new THREE.Mesh(
        new THREE.SphereGeometry(0.05 * this.scale, 8, 8),
        createClayMaterial(0x78281f, { roughness: 0.9 })
      );
      nostril.position.set(nx * this.scale, -0.08 * this.scale, 0.12 * this.scale);
      noseRoot.add(nostril);
    });

    // Grands yeux avec paupières souples en argile
    this.eyes = new THREE.Group();
    this.head.add(this.eyes);

    [-0.14, 0.14].forEach((xSide, i) => {
      const eyeSocket = new THREE.Group();
      eyeSocket.position.set(xSide * this.scale, 0.18 * this.scale, 0.35 * this.scale);

      const globe = new THREE.Mesh(new THREE.SphereGeometry(0.10 * this.scale, 16, 14), matWhite);
      eyeSocket.add(globe);

      const pupil = new THREE.Mesh(new THREE.SphereGeometry(0.048 * this.scale, 10, 10), matBlack);
      pupil.position.set(0, 0, 0.085 * this.scale);
      globe.add(pupil);

      // Paupière supérieure en pâte tombante
      const lidGeom = new THREE.SphereGeometry(0.108 * this.scale, 14, 12, 0, Math.PI * 2, 0, Math.PI * 0.45);
      const eyelid = new THREE.Mesh(lidGeom, matSkin);
      eyelid.rotation.x = (this.id === 'B' ? -0.45 : -0.32); // Obélix regard bonhomme et pensif
      eyeSocket.add(eyelid);

      this.eyes.add(eyeSocket);
    });

    // Arcades sourcilières et sourcils expressifs
    this.eyebrows = new THREE.Group();
    this.head.add(this.eyebrows);

    [-0.15, 0.15].forEach((xSide, i) => {
      const browGeom = new THREE.BoxGeometry(0.16 * this.scale, 0.055 * this.scale, 0.08 * this.scale);
      const brow = new THREE.Mesh(browGeom, matMustache);
      brow.position.set(xSide * this.scale, 0.32 * this.scale, 0.38 * this.scale);
      brow.rotation.z = (i === 0 ? 0.14 : -0.14);
      this.eyebrows.add(brow);
    });

    // Moustache imposante tombante à mèches bombées
    this.mustache = new THREE.Group();
    this.mustache.position.set(0, -0.06 * this.scale, 0.38 * this.scale);
    this.head.add(this.mustache);

    [-1, 1].forEach((side) => {
      const tuftGroup = new THREE.Group();

      const m1 = new THREE.Mesh(new THREE.ConeGeometry(0.14 * this.scale, 0.52 * this.scale, 14), matMustache);
      m1.rotation.z = side * 1.35;
      m1.scale.set(1.15, 0.65, 1.35);
      m1.position.set(side * 0.22 * this.scale, 0, 0);
      m1.castShadow = true;
      tuftGroup.add(m1);

      const m2 = new THREE.Mesh(new THREE.ConeGeometry(0.10 * this.scale, 0.42 * this.scale, 12), matMustache);
      m2.rotation.z = side * 1.55;
      m2.position.set(side * 0.18 * this.scale, -0.09 * this.scale, 0.04 * this.scale);
      tuftGroup.add(m2);

      const m3 = new THREE.Mesh(new THREE.ConeGeometry(0.08 * this.scale, 0.28 * this.scale, 10), matMustache);
      m3.rotation.z = side * 0.90;
      m3.position.set(side * 0.35 * this.scale, -0.06 * this.scale, -0.02 * this.scale);
      tuftGroup.add(m3);

      this.mustache.add(tuftGroup);
    });

    // Bouche creusée déformable
    this.mouthGroup = new THREE.Group();
    this.mouthGroup.position.set(0, -0.21 * this.scale, 0.36 * this.scale);
    this.head.add(this.mouthGroup);

    const cavity = new THREE.Mesh(
      new THREE.BoxGeometry(0.18 * this.scale, 0.09 * this.scale, 0.08 * this.scale),
      matBlack
    );
    this.mouthGroup.add(cavity);

    const lipGeom = new THREE.CylinderGeometry(0.035 * this.scale, 0.035 * this.scale, 0.16 * this.scale, 8);
    lipGeom.rotateZ(Math.PI / 2);
    const lip = new THREE.Mesh(lipGeom, matNose);
    lip.position.set(0, -0.05 * this.scale, 0.04 * this.scale);
    this.mouthGroup.add(lip);

    // Coiffes et parures gauloises
    if (this.id === 'A') {
      // Casque ailé sculpté avec ailes souples
      const helmetGeom = new THREE.SphereGeometry(0.44 * this.scale, 24, 18, 0, Math.PI * 2, 0, Math.PI * 0.54);
      const matHelmet = createClayMaterial(0x7f8c8d, { roughness: 0.50, metalness: 0.38 });
      const helmet = new THREE.Mesh(helmetGeom, matHelmet);
      helmet.position.y = 0.07 * this.scale;
      this.head.add(helmet);

      for (let r = 0; r < 10; r++) {
        const rivet = new THREE.Mesh(new THREE.SphereGeometry(0.026 * this.scale, 6, 6), matGold);
        const theta = (r / 10) * Math.PI * 2;
        rivet.position.set(Math.cos(theta) * 0.43 * this.scale, 0.07 * this.scale, Math.sin(theta) * 0.43 * this.scale);
        this.head.add(rivet);
      }

      // Ailettes du casque
      [-1, 1].forEach((side) => {
        const wingGroup = new THREE.Group();
        wingGroup.position.set(side * 0.42 * this.scale, 0.36 * this.scale, 0);

        for (let w = 0; w < 3; w++) {
          const feather = new THREE.Mesh(new THREE.ConeGeometry(0.09 * this.scale, 0.42 * this.scale, 10), matWhite);
          feather.rotation.z = side * (0.35 + w * 0.18);
          feather.rotation.x = -w * 0.15;
          feather.position.set(side * w * 0.07 * this.scale, w * 0.05 * this.scale, 0);
          wingGroup.add(feather);
        }
        this.head.add(wingGroup);
      });
    } else {
      // Tresses épaisses avec attaches en cuir pour Obélicon
      [-1, 1].forEach((side) => {
        const braidGroup = new THREE.Group();
        braidGroup.position.set(side * 0.40 * this.scale, -0.06 * this.scale, -0.04 * this.scale);

        for (let b = 0; b < 5; b++) {
          const braidPart = new THREE.Mesh(
            new THREE.SphereGeometry(0.082 * this.scale, 12, 10),
            matMustache
          );
          braidPart.scale.set(1, 1.3, 0.95);
          braidPart.position.set(0, -b * 0.16 * this.scale, 0);
          braidGroup.add(braidPart);
        }

        const ribbon = new THREE.Mesh(
          new THREE.TorusGeometry(0.055 * this.scale, 0.028 * this.scale, 8, 14),
          createClayMaterial(CLAY_PALETTE.gauloisBlue, { roughness: 0.8 })
        );
        ribbon.position.y = -0.82 * this.scale;
        braidGroup.add(ribbon);

        this.head.add(braidGroup);
      });
    }

    // 3. Bras et 4 Doigts individuels modelés par main
    this.leftArm = this._createDetailedArm(1, matSkin, matTunic);
    this.rightArm = this._createDetailedArm(-1, matSkin, matTunic);
    this.pelvis.add(this.leftArm.shoulder);
    this.pelvis.add(this.rightArm.shoulder);

    // 4. Jambes courtes et sabots en argile
    this.leftLeg = this._createDetailedLeg(1, matPants, matBelt);
    this.rightLeg = this._createDetailedLeg(-1, matPants, matBelt);
    this.pelvis.add(this.leftLeg.hip);
    this.pelvis.add(this.rightLeg.hip);

    this.parts = {
      root: this.root,
      pelvis: this.pelvis,
      head: this.head,
      mouthGroup: this.mouthGroup,
      eyebrows: this.eyebrows,
      mustache: this.mustache,
      leftArm: this.leftArm,
      rightArm: this.rightArm,
      leftLeg: this.leftLeg,
      rightLeg: this.rightLeg
    };
  }

  _createDetailedArm(side, matSkin, matTunic) {
    const shoulder = new THREE.Group();
    shoulder.position.set(side * 0.55 * this.scale, 0.50 * this.scale, 0);

    const sleeveMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.19 * this.scale, 0.16 * this.scale, 0.22 * this.scale, 16), matTunic);
    sleeveMesh.position.y = -0.06 * this.scale;
    shoulder.add(sleeveMesh);

    const upperArm = new THREE.Mesh(new THREE.CylinderGeometry(0.13 * this.scale, 0.11 * this.scale, 0.38 * this.scale, 14), matSkin);
    upperArm.position.y = -0.22 * this.scale;
    shoulder.add(upperArm);

    const elbow = new THREE.Group();
    elbow.position.set(0, -0.41 * this.scale, 0);
    shoulder.add(elbow);

    const elbowBulge = new THREE.Mesh(new THREE.SphereGeometry(0.12 * this.scale, 10, 8), matSkin);
    elbow.add(elbowBulge);

    const forearm = new THREE.Mesh(new THREE.CylinderGeometry(0.11 * this.scale, 0.09 * this.scale, 0.34 * this.scale, 14), matSkin);
    forearm.position.y = -0.17 * this.scale;
    elbow.add(forearm);

    const hand = new THREE.Group();
    hand.position.set(0, -0.35 * this.scale, 0);
    elbow.add(hand);

    const palm = new THREE.Mesh(new THREE.BoxGeometry(0.15 * this.scale, 0.13 * this.scale, 0.09 * this.scale), matSkin);
    palm.castShadow = true;
    hand.add(palm);

    // Pouce
    const thumb = new THREE.Group();
    thumb.position.set(side * 0.09 * this.scale, 0.02 * this.scale, 0.03 * this.scale);
    const thumbMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.035 * this.scale, 0.030 * this.scale, 0.13 * this.scale, 8), matSkin);
    thumbMesh.rotation.z = side * 0.6;
    thumb.add(thumbMesh);
    hand.add(thumb);

    // 3 Doigts modelés (Index, Majeur, Auriculaire)
    const fingers = [];
    [-0.045, 0.0, 0.045].forEach((fx, idx) => {
      const finger = new THREE.Group();
      finger.position.set(fx * this.scale, -0.09 * this.scale, 0);
      const fMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.030 * this.scale, 0.026 * this.scale, 0.14 * this.scale, 8), matSkin);
      fMesh.position.y = -0.07 * this.scale;
      fMesh.castShadow = true;
      finger.add(fMesh);
      hand.add(finger);
      fingers.push(finger);
    });

    return { shoulder, elbow, hand, thumb, fingers };
  }

  _createDetailedLeg(side, matPants, matShoe) {
    const hip = new THREE.Group();
    hip.position.set(side * 0.30 * this.scale, -0.42 * this.scale, 0);

    const thigh = new THREE.Mesh(new THREE.CylinderGeometry(0.21 * this.scale, 0.17 * this.scale, 0.44 * this.scale, 16), matPants);
    thigh.position.y = -0.22 * this.scale;
    hip.add(thigh);

    const knee = new THREE.Group();
    knee.position.set(0, -0.44 * this.scale, 0);
    hip.add(knee);

    const kneeCap = new THREE.Mesh(new THREE.SphereGeometry(0.15 * this.scale, 10, 8), matPants);
    knee.add(kneeCap);

    const shoeGroup = new THREE.Group();
    shoeGroup.position.set(0, -0.10 * this.scale, 0.08 * this.scale);

    const shoeBody = new THREE.Mesh(new THREE.SphereGeometry(0.19 * this.scale, 14, 12), matShoe);
    shoeBody.scale.set(0.9, 0.6, 1.45);
    shoeBody.castShadow = true;
    shoeGroup.add(shoeBody);

    knee.add(shoeGroup);

    return { hip, knee, shoeGroup };
  }

  setAction(actionName) {
    if (this.currentAction !== actionName) {
      this.currentAction = actionName;
      this.actionProgress = 0;
    }
  }

  update(delta) {
    this.animTime += delta;
    this.actionProgress += delta;

    // Verrouillage strict à 20 FPS : step = Math.floor(time * 20) / 20
    const currentStep = Math.floor(this.animTime * this.fps) / this.fps;

    if (currentStep !== this.quantizedTime) {
      this.quantizedTime = currentStep;
      this._applyStopMotionFrame(this.quantizedTime, this.currentAction);
    }
  }

  _applyStopMotionFrame(time, action) {
    const p = this.parts;
    const jitter = (Math.random() - 0.5) * 0.024;

    switch (action) {
      case 'talk': {
        const t = time * 9;
        p.head.rotation.y = Math.sin(t * 0.8) * 0.28 + jitter;
        p.head.rotation.x = Math.sin(t * 1.6) * 0.16;
        p.head.rotation.z = Math.cos(t * 0.7) * 0.12;

        const mouthOpen = (Math.floor(time * 20) % 4 <= 1);
        p.mouthGroup.scale.set(mouthOpen ? 1.5 : 0.85, mouthOpen ? 2.2 : 0.6, 1);
        p.mouthGroup.position.y = (-0.21 - (mouthOpen ? 0.03 : 0)) * this.scale;

        p.mustache.rotation.z = Math.sin(t * 2) * 0.10;
        p.mustache.position.y = (-0.06 + Math.sin(t * 2) * 0.02) * this.scale;

        p.eyebrows.position.y = (Math.sin(t) * 0.05) * this.scale;

        p.rightArm.shoulder.rotation.x = -0.7 + Math.sin(t) * 0.5;
        p.rightArm.shoulder.rotation.z = -0.45 + Math.cos(t * 1.2) * 0.3;
        p.rightArm.elbow.rotation.x = -0.85 + Math.sin(t * 1.4) * 0.45;

        p.rightArm.fingers.forEach((f, idx) => {
          f.rotation.x = Math.sin(t * 2 + idx) * 0.4;
        });

        p.leftArm.shoulder.rotation.set(-0.25, 0, 0.35);
        p.leftArm.elbow.rotation.x = -0.4;
        break;
      }

      case 'think': {
        p.head.rotation.x = -0.28 + jitter;
        p.head.rotation.y = 0.22;
        p.head.rotation.z = 0.16;

        p.rightArm.shoulder.rotation.set(-1.45, 0.2, -0.4);
        p.rightArm.elbow.rotation.x = -1.6;
        p.leftArm.shoulder.rotation.set(-0.4, 0, 0.25);
        p.leftArm.elbow.rotation.x = -0.5;

        p.mouthGroup.scale.set(0.7, 0.4, 1);
        p.eyebrows.position.y = 0.04 * this.scale;
        p.mustache.rotation.z = -0.05;
        break;
      }

      case 'shrug': {
        const t = time * 5;
        const lift = (Math.sin(t) + 1) * 0.5;
        p.head.rotation.y = Math.sin(t * 0.5) > 0 ? 0.25 : -0.25;
        p.head.rotation.z = 0.12;

        p.pelvis.position.y = (0.84 + lift * 0.08) * this.scale;
        p.leftArm.shoulder.rotation.set(-0.2, 0, 0.8 + lift * 0.4);
        p.rightArm.shoulder.rotation.set(-0.2, 0, -0.8 - lift * 0.4);
        p.leftArm.elbow.rotation.x = -0.9;
        p.rightArm.elbow.rotation.x = -0.9;

        p.leftArm.fingers.forEach(f => f.rotation.z = 0.3);
        p.rightArm.fingers.forEach(f => f.rotation.z = -0.3);

        p.mouthGroup.scale.set(1.2, 0.4, 1);
        break;
      }

      case 'run': {
        const t = time * 16;
        const legAngle = Math.sin(t) * 0.82;
        p.leftLeg.hip.rotation.x = legAngle;
        p.rightLeg.hip.rotation.x = -legAngle;

        p.leftArm.shoulder.rotation.x = -legAngle * 0.85;
        p.rightArm.shoulder.rotation.x = legAngle * 0.85;
        p.leftArm.elbow.rotation.x = -0.8;
        p.rightArm.elbow.rotation.x = -0.8;

        p.pelvis.position.y = (0.84 + Math.abs(Math.sin(t)) * 0.14) * this.scale;
        p.pelvis.rotation.y = Math.sin(t) * 0.18;
        p.head.rotation.y = -Math.sin(t) * 0.12;
        break;
      }

      case 'kick': {
        const cycle = (this.actionProgress % 0.8) / 0.8;
        if (cycle < 0.4) {
          p.rightLeg.hip.rotation.x = 0.95;
          p.leftLeg.hip.rotation.x = -0.25;
          p.pelvis.position.y = 0.80 * this.scale;
          p.leftArm.shoulder.rotation.x = -1.3;
          p.rightArm.shoulder.rotation.x = 0.9;
        } else if (cycle < 0.7) {
          p.rightLeg.hip.rotation.x = -1.35;
          p.leftLeg.hip.rotation.x = 0.12;
          p.pelvis.position.y = 0.92 * this.scale;
          p.leftArm.shoulder.rotation.x = 0.6;
          p.rightArm.shoulder.rotation.x = -1.3;
        } else {
          p.rightLeg.hip.rotation.x = -0.2;
          p.leftLeg.hip.rotation.x = 0;
          p.pelvis.position.y = 0.84 * this.scale;
        }
        break;
      }

      case 'celebrate': {
        const t = time * 11;
        const jump = Math.abs(Math.sin(t)) * 0.32;
        p.pelvis.position.y = (0.84 + jump) * this.scale;
        p.pelvis.rotation.y = Math.sin(t * 0.5) * 0.45;

        p.leftArm.shoulder.rotation.set(-1.7 + Math.sin(t) * 0.3, 0, 0.85);
        p.rightArm.shoulder.rotation.set(-1.7 + Math.cos(t) * 0.3, 0, -0.85);
        p.leftArm.elbow.rotation.x = -0.3;
        p.rightArm.elbow.rotation.x = -0.3;

        p.head.rotation.x = -0.38 + Math.sin(t) * 0.16;
        p.mouthGroup.scale.set(1.8, 1.9, 1);
        break;
      }

      case 'genuflect': {
        p.pelvis.position.y = 0.46 * this.scale;
        p.leftLeg.hip.rotation.x = -1.25;
        p.leftLeg.knee.position.y = -0.22 * this.scale;
        p.rightLeg.hip.rotation.x = 0.95;
        p.rightLeg.knee.position.y = -0.38 * this.scale;

        this._applyManibusIunctis();
        p.head.rotation.x = 0.38 + jitter;
        p.head.rotation.y = 0;
        p.mouthGroup.scale.set(0.6, 0.4, 1);
        break;
      }

      case 'incurvatio': {
        p.pelvis.position.y = 0.80 * this.scale;
        p.pelvis.rotation.x = 0.58 + jitter;
        p.leftLeg.hip.rotation.x = -0.15;
        p.rightLeg.hip.rotation.x = -0.15;

        this._applyManibusIunctis();
        p.head.rotation.x = 0.28;
        p.head.rotation.y = 0;
        p.mouthGroup.scale.set(0.5, 0.3, 1);
        break;
      }

      case 'manibusIunctis': {
        p.pelvis.position.y = 0.84 * this.scale;
        p.pelvis.rotation.x = 0;
        p.leftLeg.hip.rotation.x = 0;
        p.rightLeg.hip.rotation.x = 0;

        this._applyManibusIunctis();
        p.head.rotation.x = 0.12 + jitter;
        p.head.rotation.y = 0;
        p.mouthGroup.scale.set(0.6, 0.4, 1);
        break;
      }

      case 'orans': {
        const t = time * 3.5;
        const sway = Math.sin(t) * 0.09;
        p.pelvis.position.y = 0.84 * this.scale;
        p.pelvis.rotation.z = sway;

        p.leftArm.shoulder.rotation.set(-1.75 + Math.sin(t * 2) * 0.08, 0, 0.98);
        p.rightArm.shoulder.rotation.set(-1.75 + Math.sin(t * 2) * 0.08, 0, -0.98);
        p.leftArm.elbow.rotation.x = -0.28;
        p.rightArm.elbow.rotation.x = -0.28;

        p.leftArm.fingers.forEach(f => f.rotation.x = -0.3);
        p.rightArm.fingers.forEach(f => f.rotation.x = -0.3);

        p.head.rotation.x = -0.38 + jitter;
        p.head.rotation.y = Math.sin(t * 1.5) * 0.14;
        p.mouthGroup.scale.set(1.4, 1.5, 1);
        break;
      }

      case 'clap': {
        const t = time * 12;
        const isClosed = Math.sin(t) > 0.25;
        p.pelvis.position.y = (0.84 + (isClosed ? 0.04 : 0)) * this.scale;

        const armAngle = isClosed ? 0.28 : 0.88;
        p.leftArm.shoulder.rotation.set(-1.15, 0, armAngle);
        p.rightArm.shoulder.rotation.set(-1.15, 0, -armAngle);
        p.leftArm.elbow.rotation.x = -1.25;
        p.rightArm.elbow.rotation.x = -1.25;

        p.head.rotation.x = -0.16;
        p.head.rotation.y = Math.sin(t * 0.4) * 0.16;
        p.mouthGroup.scale.set(1.3, 1.2, 1);
        break;
      }

      case 'idle':
      default: {
        const t = time * 3;
        const breath = Math.sin(t) * 0.035;
        p.pelvis.position.y = (0.84 + breath) * this.scale;
        p.pelvis.rotation.set(0, 0, 0);

        p.head.rotation.y = Math.sin(t * 0.7) * 0.12 + jitter;
        p.head.rotation.x = 0;
        p.head.rotation.z = Math.sin(t * 0.5) * 0.04;

        p.leftArm.shoulder.rotation.set(-0.18 + breath, 0, 0.28);
        p.rightArm.shoulder.rotation.set(-0.18 + breath, 0, -0.28);
        p.leftArm.elbow.rotation.x = -0.35;
        p.rightArm.elbow.rotation.x = -0.35;

        p.leftLeg.hip.rotation.x = 0;
        p.rightLeg.hip.rotation.x = 0;
        p.mouthGroup.scale.set(0.9, 0.5, 1);
        break;
      }
    }
  }

  _applyManibusIunctis() {
    const p = this.parts;
    p.leftArm.shoulder.rotation.set(-0.90, 0.48, 0.42);
    p.rightArm.shoulder.rotation.set(-0.90, -0.48, -0.42);
    p.leftArm.elbow.rotation.x = -1.50;
    p.rightArm.elbow.rotation.x = -1.50;
    p.leftArm.hand.position.set(0.12 * this.scale, -0.34 * this.scale, 0.20 * this.scale);
    p.rightArm.hand.position.set(-0.12 * this.scale, -0.34 * this.scale, 0.20 * this.scale);

    p.leftArm.fingers.forEach(f => f.rotation.set(0, 0, 0));
    p.rightArm.fingers.forEach(f => f.rotation.set(0, 0, 0));
  }
}

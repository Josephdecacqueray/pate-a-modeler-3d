import * as THREE from 'three';
import { createClayMaterial, CLAY_PALETTE } from '../materials/clayMaterial.js';
import { sounds } from '../audio/soundEffects.js';
import { geminiService } from '../services/geminiService.js';

export const EMMANUEL_CHORUSES = [
  {
    refrain: "Loué sois-tu, Seigneur, pour ta gloire immense !",
    subtext: "Mon cœur exulte et te rend grâce, Alléluia !",
    posture: 'orans',
    leadSpeaker: "Louange Spontanée"
  },
  {
    refrain: "Jubilez, criez de joie pour le Seigneur !",
    subtext: "Venez à Lui avec des chants et des acclamations !",
    posture: 'clap',
    leadSpeaker: "Acclamation Festive"
  },
  {
    refrain: "Jésus, Roi de Gloire, Agneau Vainqueur !",
    subtext: "Ton amour est plus grand que tout, nous t'adorons !",
    posture: 'orans',
    leadSpeaker: "Adoration Joyeuse"
  },
  {
    refrain: "Que ma louange monte vers Toi comme un parfum !",
    subtext: "En tout temps je bénirai le Seigneur, sa louange sans cesse à mes lèvres !",
    posture: 'manibusIunctis',
    leadSpeaker: "Action de Grâce"
  },
  {
    refrain: "Viens Esprit-Saint, répands ton feu d'Amour !",
    subtext: "Embrase nos cœurs, donne-nous la paix et la joie !",
    posture: 'orans',
    leadSpeaker: "Épiphanie de l'Esprit"
  },
  {
    refrain: "Célébrez le Seigneur car Il est bon !",
    subtext: "Éternel est son amour, fidèle à jamais !",
    posture: 'clap',
    leadSpeaker: "Refrain d'Espérance"
  },
  {
    refrain: "Mon âme tressaille d'allégresse en Dieu mon Sauveur !",
    subtext: "Il a fait pour moi des merveilles, Saint est son Nom !",
    posture: 'orans',
    leadSpeaker: "Magnificat Champêtre"
  }
];

export class EmmanuelMode {
  constructor(charA, charB, uiCallbacks) {
    this.charA = charA;
    this.charB = charB;
    this.uiCallbacks = uiCallbacks;

    this.active = false;
    this.currentStep = 0;
    this.autoPlay = true;
    this.stepTimer = 0;
    this.clapInterval = 0.8;
    this.clapTimer = 0;

    this.sceneGroup = new THREE.Group();
    this.sceneGroup.name = "EmmanuelScene";
    this.sceneGroup.visible = false;

    // Éléments d'ambiance lumineuse et festive
    this.sunLight = null;
    this.sparkles = null;
    this.sparkleVelocities = [];

    this._buildEnvironment();
    this._buildGoldenDoveSymbol();
    this._buildJoySparkles();
  }

  _buildEnvironment() {
    // Colline verdoyante en pâte à modeler ensoleillée
    const hillGeom = new THREE.SphereGeometry(6, 24, 16, 0, Math.PI * 2, 0, Math.PI * 0.3);
    const hillMat = createClayMaterial(CLAY_PALETTE.turfGreen, { roughness: 0.82 });
    const hill = new THREE.Mesh(hillGeom, hillMat);
    hill.position.set(0, -5.5, -1.5);
    hill.receiveShadow = true;
    this.sceneGroup.add(hill);

    // Fleurs stylisées en pâte à modeler disséminées
    const flowerColors = [0xe74c3c, 0xf39c12, 0x9b59b6, 0xf1c40f, 0xffffff];
    for (let i = 0; i < 22; i++) {
      const flowerGroup = new THREE.Group();
      const x = (Math.random() - 0.5) * 5.5;
      const z = -0.5 - Math.random() * 3.5;
      flowerGroup.position.set(x, 0.05, z);

      // Cœur jaune de la fleur
      const centerMat = createClayMaterial(CLAY_PALETTE.gauloisYellow, { roughness: 0.7 });
      const center = new THREE.Mesh(new THREE.SphereGeometry(0.06, 8, 8), centerMat);
      flowerGroup.add(center);

      // 4 à 5 pétales en pâte
      const petalColor = flowerColors[Math.floor(Math.random() * flowerColors.length)];
      const petalMat = createClayMaterial(petalColor, { roughness: 0.75 });
      const petalsCount = 5;
      for (let p = 0; p < petalsCount; p++) {
        const petal = new THREE.Mesh(new THREE.SphereGeometry(0.05, 6, 6), petalMat);
        petal.scale.set(1.4, 0.4, 0.9);
        const theta = (p / petalsCount) * Math.PI * 2;
        petal.position.set(Math.cos(theta) * 0.09, 0, Math.sin(theta) * 0.09);
        flowerGroup.add(petal);
      }

      this.sceneGroup.add(flowerGroup);
    }

    // Petite estrade en bois d'argile clair
    const platformGeom = new THREE.CylinderGeometry(1.6, 1.8, 0.15, 20);
    const platformMat = createClayMaterial(CLAY_PALETTE.altarWood, { roughness: 0.78 });
    const platform = new THREE.Mesh(platformGeom, platformMat);
    platform.position.set(0, 0.075, -0.6);
    platform.receiveShadow = true;
    this.sceneGroup.add(platform);
  }

  _buildGoldenDoveSymbol() {
    // Symbole solaire de la Colombe / Esprit de louange en pâte dorée au-dessus de la scène
    const symbolGroup = new THREE.Group();
    symbolGroup.position.set(0, 3.2, -2.4);

    const goldMat = createClayMaterial(CLAY_PALETTE.goldChalice, {
      roughness: 0.35,
      metalness: 0.45
    });

    // Corps de colombe
    const bodyGeom = new THREE.SphereGeometry(0.24, 12, 10);
    bodyGeom.scale(1.4, 0.9, 0.7);
    const body = new THREE.Mesh(bodyGeom, goldMat);
    symbolGroup.add(body);

    // Ailes déployées
    [-1, 1].forEach((side) => {
      const wingGeom = new THREE.ConeGeometry(0.22, 0.65, 8);
      wingGeom.rotateZ(side * 1.2);
      wingGeom.scale(1, 0.4, 1.3);
      const wing = new THREE.Mesh(wingGeom, goldMat);
      wing.position.set(side * 0.34, 0.12, 0);
      symbolGroup.add(wing);
    });

    // Rayons dorés rayonnants (forme de soleil)
    const rayCount = 12;
    for (let r = 0; r < rayCount; r++) {
      const rayGeom = new THREE.CylinderGeometry(0.02, 0.04, 0.7, 6);
      const theta = (r / rayCount) * Math.PI * 2;
      const ray = new THREE.Mesh(rayGeom, goldMat);
      ray.position.set(Math.cos(theta) * 0.9, Math.sin(theta) * 0.9, -0.05);
      ray.rotation.z = theta - Math.PI / 2;
      symbolGroup.add(ray);
    }

    this.sceneGroup.add(symbolGroup);
    this.doveSymbol = symbolGroup;
  }

  _buildJoySparkles() {
    // Particules lumineuses de joie dorées montant doucement
    const count = 45;
    const geom = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);
    const velocities = [];

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 4.2;
      positions[i * 3 + 1] = 0.3 + Math.random() * 3.5;
      positions[i * 3 + 2] = -0.5 + (Math.random() - 0.5) * 3.0;

      velocities.push({
        vy: 0.4 + Math.random() * 0.5,
        driftX: (Math.random() - 0.5) * 0.2,
        phase: Math.random() * Math.PI * 2
      });
    }

    geom.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const pMat = new THREE.PointsMaterial({
      color: 0xffea00,
      size: 0.18,
      transparent: true,
      opacity: 0.65,
      depthWrite: false
    });

    this.sparkles = new THREE.Points(geom, pMat);
    this.sparkleVelocities = velocities;
    this.sceneGroup.add(this.sparkles);
  }

  enter() {
    this.active = true;
    this.sceneGroup.visible = true;
    this.currentStep = 0;
    this.stepTimer = 0;
    this.clapTimer = 0;

    // Positionnement côte à côte tournés vers le spectateur et le ciel
    this.charA.group.position.set(-0.85, 0.15, -0.5);
    this.charA.group.rotation.set(0, 0.25, 0);

    this.charB.group.position.set(0.85, 0.15, -0.5);
    this.charB.group.rotation.set(0, -0.25, 0);

    // Joue un premier bel accord de louange
    sounds.playPraiseChord();

    this._applyStep(0);
  }

  exit() {
    this.active = false;
    this.sceneGroup.visible = false;
  }

  _applyStep(idx) {
    if (!this.active) return;
    this.currentStep = idx % EMMANUEL_CHORUSES.length;
    const step = EMMANUEL_CHORUSES[this.currentStep];

    // Posture de louange en stop-motion
    this.charA.setAction(step.posture);
    this.charB.setAction(step.posture);

    // Accompagnement sonore
    if (step.posture === 'clap') {
      sounds.playClap();
    } else if (step.posture === 'orans') {
      sounds.playPraiseChord();
    }

    if (this.uiCallbacks.onEmmanuelStep) {
      this.uiCallbacks.onEmmanuelStep(step, this.currentStep + 1, EMMANUEL_CHORUSES.length);
    }
  }

  nextStep() {
    this.stepTimer = 0;
    this._applyStep(this.currentStep + 1);
  }

  prevStep() {
    this.stepTimer = 0;
    const newIdx = (this.currentStep - 1 + EMMANUEL_CHORUSES.length) % EMMANUEL_CHORUSES.length;
    this._applyStep(newIdx);
  }

  setManualPosture(postureName) {
    this.charA.setAction(postureName);
    this.charB.setAction(postureName);
    if (postureName === 'clap') {
      sounds.playClap();
    } else if (postureName === 'orans') {
      sounds.playPraiseChord();
    }
  }

  triggerClap() {
    sounds.playClap();
    this.charA.setAction('clap');
    this.charB.setAction('clap');
  }

  triggerChord() {
    sounds.playPraiseChord();
  }

  async generateCustomPraise() {
    if (this.uiCallbacks.onEmmanuelChorus) {
      this.uiCallbacks.onEmmanuelChorus({
        refrain: "Écoute l'Esprit...",
        subtext: "Génération de l'acclamation de louange en direct avec Gemini...",
        posture: 'orans',
        leadSpeaker: "Louange en direct (IA)"
      }, this.currentStep + 1, EMMANUEL_CHORUSES.length);
    }
    this.charA.setAction('orans');
    this.charB.setAction('orans');

    try {
      const text = await geminiService.generatePrayerText('emmanuel', 'Obélicon');
      if (this.uiCallbacks.onEmmanuelChorus) {
        this.uiCallbacks.onEmmanuelChorus({
          refrain: text,
          subtext: "Alléluia ! Acclamez le Seigneur de tout votre cœur !",
          posture: 'clap',
          leadSpeaker: "Acclamation Spontanée (Direct Gemini)"
        }, this.currentStep + 1, EMMANUEL_CHORUSES.length);
      }
      this.charA.setAction('clap');
      this.charB.setAction('clap');
      sounds.playPraiseChord();
    } catch (e) {
      console.error(e);
    }
  }

  update(delta, totalTime) {
    if (!this.active) return;

    // Balancement et pulsation du symbole solaire doré
    if (this.doveSymbol) {
      this.doveSymbol.rotation.z = Math.sin(totalTime * 1.5) * 0.08;
      const s = 1.0 + Math.sin(totalTime * 3) * 0.05;
      this.doveSymbol.scale.set(s, s, s);
    }

    // Battements de mains réguliers si la posture est 'clap'
    const currentChorus = EMMANUEL_CHORUSES[this.currentStep];
    if (currentChorus && currentChorus.posture === 'clap') {
      this.clapTimer += delta;
      if (this.clapTimer >= this.clapInterval) {
        this.clapTimer = 0;
        sounds.playClap();
      }
    }

    // Particules dorées de louange qui montent
    if (this.sparkles) {
      const pos = this.sparkles.geometry.attributes.position.array;
      for (let i = 0; i < this.sparkleVelocities.length; i++) {
        const v = this.sparkleVelocities[i];
        pos[i * 3 + 1] += v.vy * delta;
        pos[i * 3] += Math.sin(totalTime * 3 + v.phase) * delta * 0.25;

        if (pos[i * 3 + 1] > 4.2) {
          pos[i * 3 + 1] = 0.2;
          pos[i * 3] = (Math.random() - 0.5) * 4.2;
        }
      }
      this.sparkles.geometry.attributes.position.needsUpdate = true;
    }

    // Progression automatique des cantiques de louange
    if (this.autoPlay) {
      this.stepTimer += delta;
      if (this.stepTimer > 6.5) {
        this.stepTimer = 0;
        this.nextStep();
      }
    }
  }
}

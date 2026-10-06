import * as THREE from 'three';
import { createClayMaterial, CLAY_PALETTE } from '../materials/clayMaterial.js';
import { sounds } from '../audio/soundEffects.js';
import { geminiService } from '../services/geminiService.js';

export const TRIDENTINE_LITURGY = [
  {
    latin: "Introibo ad altare Dei. — Ad Deum qui laetificat juventutem meam.",
    french: "J'avancerai jusqu'à l'autel de Dieu. — Vers le Dieu qui réjouit ma jeunesse.",
    posture: 'manibusIunctis',
    speaker: "Prêtre & Servants"
  },
  {
    latin: "Adjutorium nostrum in nomine Domini. — Qui fecit caelum et terram.",
    french: "Notre secours est dans le nom du Seigneur. — Qui a fait le ciel et la terre.",
    posture: 'manibusIunctis',
    speaker: "Prêtre & Servants"
  },
  {
    latin: "Confiteor Deo omnipotenti, beatae Mariae semper Virgini...",
    french: "Je confesse à Dieu tout-puissant, à la bienheureuse Marie toujours Vierge...",
    posture: 'incurvatio', // Inclinaison profonde
    speaker: "Incurvatio profunda (Frappe de poitrine)"
  },
  {
    latin: "Kyrie, eleison. Christe, eleison. Kyrie, eleison.",
    french: "Seigneur, prends pitié. Christ, prends pitié. Seigneur, prends pitié.",
    posture: 'incurvatio',
    speaker: "Supplication Liturgique"
  },
  {
    latin: "Gloria in excelsis Deo, et in terra pax hominibus bonae voluntatis.",
    french: "Gloire à Dieu au plus haut des cieux, et paix sur la terre aux hommes de bonne volonté.",
    posture: 'manibusIunctis',
    speaker: "Hymne de Louange"
  },
  {
    latin: "Dominus vobiscum. — Et cum spiritu tuo.",
    french: "Le Seigneur soit avec vous. — Et avec votre esprit.",
    posture: 'manibusIunctis',
    speaker: "Salutation Sacerdotale"
  },
  {
    latin: "Sursum corda ! — Habemus ad Dominum.",
    french: "Élevons nos cœurs ! — Nous les tournons vers le Seigneur.",
    posture: 'manibusIunctis',
    speaker: "Préface"
  },
  {
    latin: "Sanctus, Sanctus, Sanctus Dominus Deus Sabaoth. Pleni sunt caeli et terra gloria tua.",
    french: "Saint ! Saint ! Saint, le Seigneur, Dieu de l'univers ! Le ciel et la terre sont remplis de ta gloire.",
    posture: 'incurvatio',
    speaker: "Sanctus (Clochette d'autel)",
    hasBell: true
  },
  {
    latin: "Agnus Dei, qui tollis peccata mundi : miserere nobis / dona nobis pacem.",
    french: "Agneau de Dieu, qui enlèves les péchés du monde, prends pitié de nous / donne-nous la paix.",
    posture: 'genuflect', // Génuflexion solennelle
    speaker: "Fraction & Communion"
  }
];

export class TridentineMode {
  constructor(charA, charB, uiCallbacks) {
    this.charA = charA;
    this.charB = charB;
    this.uiCallbacks = uiCallbacks;

    this.active = false;
    this.currentStep = 0;
    this.autoPlay = true;
    this.stepTimer = 0;

    this.sceneGroup = new THREE.Group();
    this.sceneGroup.name = "TridentineScene";
    this.sceneGroup.visible = false;

    // Éléments d'ambiance
    this.candles = [];
    this.incenseParticles = null;
    this.candleLight = null;

    this._buildAltar();
    this._buildCandles();
    this._buildIncense();
  }

  _buildAltar() {
    const altarGroup = new THREE.Group();
    altarGroup.position.set(0, 0, -2.8);

    // Marches de l'autel (Gradin en pierre d'argile)
    const stepGeom = new THREE.BoxGeometry(4.2, 0.18, 1.6);
    const stoneMat = createClayMaterial(CLAY_PALETTE.altarStone, { roughness: 0.9 });
    const step = new THREE.Mesh(stepGeom, stoneMat);
    step.position.y = 0.09;
    step.receiveShadow = true;
    altarGroup.add(step);

    // Table d'autel en pierre
    const altarBodyGeom = new THREE.BoxGeometry(3.2, 1.1, 1.0);
    const altarBody = new THREE.Mesh(altarBodyGeom, stoneMat);
    altarBody.position.set(0, 0.73, 0);
    altarBody.castShadow = true;
    altarBody.receiveShadow = true;
    altarGroup.add(altarBody);

    // Nappe d'autel blanche immaculée en pâte
    const clothGeom = new THREE.BoxGeometry(3.3, 0.08, 1.05);
    const clothMat = createClayMaterial(CLAY_PALETTE.tunicWhite, { roughness: 0.75 });
    const cloth = new THREE.Mesh(clothGeom, clothMat);
    cloth.position.set(0, 1.32, 0);
    altarGroup.add(cloth);

    // Tabernacle central
    const tabernacleGeom = new THREE.BoxGeometry(0.7, 0.7, 0.5);
    const goldMat = createClayMaterial(CLAY_PALETTE.goldChalice, { roughness: 0.45, metalness: 0.4 });
    const tabernacle = new THREE.Mesh(tabernacleGeom, goldMat);
    tabernacle.position.set(0, 1.7, -0.2);
    altarGroup.add(tabernacle);

    // Grande Croix / Crucifix d'autel au centre
    const crossGroup = new THREE.Group();
    crossGroup.position.set(0, 2.3, -0.2);

    const crossWoodMat = createClayMaterial(CLAY_PALETTE.altarWood, { roughness: 0.85 });
    const verticalGeom = new THREE.CylinderGeometry(0.05, 0.05, 1.1, 8);
    const vertical = new THREE.Mesh(verticalGeom, crossWoodMat);
    crossGroup.add(vertical);

    const horizontalGeom = new THREE.CylinderGeometry(0.045, 0.045, 0.65, 8);
    horizontalGeom.rotateZ(Math.PI / 2);
    const horizontal = new THREE.Mesh(horizontalGeom, crossWoodMat);
    horizontal.position.y = 0.22;
    crossGroup.add(horizontal);

    // Corpus doré sur la croix
    const corpusGeom = new THREE.SphereGeometry(0.09, 8, 8);
    corpusGeom.scale(0.8, 1.6, 0.6);
    const corpus = new THREE.Mesh(corpusGeom, goldMat);
    corpus.position.set(0, 0.18, 0.06);
    crossGroup.add(corpus);

    altarGroup.add(crossGroup);
    this.sceneGroup.add(altarGroup);
  }

  _buildCandles() {
    // 6 Cierges traditionnels d'autel (3 à gauche, 3 à droite du crucifix)
    const candlePositions = [
      -1.3, -0.9, -0.5, 0.5, 0.9, 1.3
    ];

    const waxMat = createClayMaterial(CLAY_PALETTE.candleWax, { roughness: 0.6 });
    const flameMat = new THREE.MeshBasicMaterial({ color: 0xffa000 });

    candlePositions.forEach((posX, idx) => {
      const candleGroup = new THREE.Group();
      candleGroup.position.set(posX, 1.36, -2.8);

      // Chandelier doré
      const standGeom = new THREE.CylinderGeometry(0.07, 0.12, 0.15, 8);
      const goldMat = createClayMaterial(CLAY_PALETTE.goldChalice, { roughness: 0.5, metalness: 0.3 });
      const stand = new THREE.Mesh(standGeom, goldMat);
      candleGroup.add(stand);

      // Cierge en cire
      const candleGeom = new THREE.CylinderGeometry(0.045, 0.045, 0.5, 10);
      candleGeom.translate(0, 0.25, 0);
      const candleMesh = new THREE.Mesh(candleGeom, waxMat);
      candleMesh.position.y = 0.08;
      candleGroup.add(candleMesh);

      // Flamme en goutte de pâte jaune/orange
      const flameGeom = new THREE.ConeGeometry(0.035, 0.12, 8);
      flameGeom.translate(0, 0.06, 0);
      const flame = new THREE.Mesh(flameGeom, flameMat);
      flame.position.y = 0.58;
      candleGroup.add(flame);

      this.sceneGroup.add(candleGroup);
      this.candles.push({ group: candleGroup, flame, initialX: posX, phase: idx * 1.1 });
    });

    // Lumière ponctuelle douce et chaude des cierges
    this.candleLight = new THREE.PointLight(0xffa500, 1.8, 8);
    this.candleLight.position.set(0, 2.2, -2.5);
    this.candleLight.castShadow = true;
    this.sceneGroup.add(this.candleLight);
  }

  _buildIncense() {
    // Particules de fumée d'encens qui s'élèvent doucement
    const count = 35;
    const geom = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);
    const velocities = [];

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 0.4;
      positions[i * 3 + 1] = 0.2 + Math.random() * 2.5;
      positions[i * 3 + 2] = -2.2 + (Math.random() - 0.5) * 0.4;

      velocities.push({
        vy: 0.35 + Math.random() * 0.4,
        drift: (Math.random() - 0.5) * 0.15,
        phase: Math.random() * Math.PI * 2
      });
    }

    geom.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const pMat = new THREE.PointsMaterial({
      color: 0xdddddd,
      size: 0.22,
      transparent: true,
      opacity: 0.35,
      depthWrite: false
    });

    this.incensePoints = new THREE.Points(geom, pMat);
    this.incenseVelocities = velocities;
    this.sceneGroup.add(this.incensePoints);
  }

  enter() {
    this.active = true;
    this.sceneGroup.visible = true;
    this.currentStep = 0;
    this.stepTimer = 0;

    // Disposition rigoureuse Ad orientem : les deux personnages sont tournés vers l'autel (dos/trois-quarts)
    this.charA.group.position.set(-0.7, 0, -1.1);
    this.charA.group.rotation.set(0, Math.PI, 0); // Tourné vers l'autel (z négatif)

    this.charB.group.position.set(0.7, 0, -1.1);
    this.charB.group.rotation.set(0, Math.PI, 0); // Tourné vers l'autel

    this._applyLiturgyStep(0);
  }

  exit() {
    this.active = false;
    this.sceneGroup.visible = false;
  }

  _applyLiturgyStep(idx) {
    if (!this.active) return;
    this.currentStep = idx % TRIDENTINE_LITURGY.length;
    const step = TRIDENTINE_LITURGY[this.currentStep];

    // Posture liturgique stop-motion
    this.charA.setAction(step.posture);
    this.charB.setAction(step.posture);

    // Son de cloche liturgique au Sanctus
    if (step.hasBell) {
      sounds.playChurchBell();
    }

    if (this.uiCallbacks.onTridentineStep) {
      this.uiCallbacks.onTridentineStep(step, this.currentStep + 1, TRIDENTINE_LITURGY.length);
    }
  }

  nextStep() {
    this.stepTimer = 0;
    this._applyLiturgyStep(this.currentStep + 1);
  }

  prevStep() {
    this.stepTimer = 0;
    const newIdx = (this.currentStep - 1 + TRIDENTINE_LITURGY.length) % TRIDENTINE_LITURGY.length;
    this._applyLiturgyStep(newIdx);
  }

  setManualPosture(postureName) {
    this.charA.setAction(postureName);
    this.charB.setAction(postureName);
  }

  ringBell() {
    sounds.playChurchBell();
  }

  async generateCustomPrayer() {
    if (this.uiCallbacks.onTridentineStep) {
      this.uiCallbacks.onTridentineStep({
        latin: "Invocatio ad Deum in cursu...",
        french: "Génération de l'oraison solennelle en direct avec Gemini...",
        speaker: "Méditation en direct (IA)",
        posture: 'incurvatio'
      }, this.currentStep + 1, TRIDENTINE_LITURGY.length);
    }
    this.charA.setAction('incurvatio');
    this.charB.setAction('incurvatio');

    try {
      const text = await geminiService.generatePrayerText('tridentine', 'Astériclos');
      const lines = text.split('\n').filter(l => l.trim().length > 0);
      const latin = lines[0] || text;
      const french = lines[1] || "Que la grâce du Seigneur demeure toujours avec vous.";

      if (this.uiCallbacks.onTridentineStep) {
        this.uiCallbacks.onTridentineStep({
          latin: latin,
          french: french,
          speaker: "Oraison Liturgique (Direct Gemini)",
          posture: 'manibusIunctis'
        }, this.currentStep + 1, TRIDENTINE_LITURGY.length);
      }
      this.charA.setAction('manibusIunctis');
      this.charB.setAction('manibusIunctis');
      sounds.playChurchBell();
    } catch (e) {
      console.error(e);
    }
  }

  update(delta, totalTime) {
    if (!this.active) return;

    // Vacillement organique des flammes de cierges en argile
    this.candles.forEach((c) => {
      const flicker = Math.sin(totalTime * 8 + c.phase) * 0.12 + Math.cos(totalTime * 14) * 0.08;
      c.flame.scale.set(1 + flicker * 0.3, 1 + flicker * 0.6, 1 + flicker * 0.3);
      c.flame.rotation.z = Math.sin(totalTime * 6 + c.phase) * 0.15;
    });

    if (this.candleLight) {
      this.candleLight.intensity = 1.8 + Math.sin(totalTime * 10) * 0.25;
    }

    // Fumée d'encens qui s'élève
    if (this.incensePoints) {
      const pos = this.incensePoints.geometry.attributes.position.array;
      for (let i = 0; i < this.incenseVelocities.length; i++) {
        const v = this.incenseVelocities[i];
        pos[i * 3 + 1] += v.vy * delta; // Monte
        pos[i * 3] += Math.sin(totalTime * 2 + v.phase) * delta * 0.12; // Dérive douce

        if (pos[i * 3 + 1] > 3.2) {
          // Réinitialisation en bas
          pos[i * 3 + 1] = 0.2;
          pos[i * 3] = (Math.random() - 0.5) * 0.4;
        }
      }
      this.incensePoints.geometry.attributes.position.needsUpdate = true;
    }

    // Défilement automatique
    if (this.autoPlay) {
      this.stepTimer += delta;
      if (this.stepTimer > 6.0) {
        this.stepTimer = 0;
        this.nextStep();
      }
    }
  }
}

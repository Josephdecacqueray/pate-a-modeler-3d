import * as THREE from 'three';
import { geminiService } from '../services/geminiService.js';
import { sounds } from '../audio/soundEffects.js';
import { createClayMaterial, CLAY_PALETTE } from '../materials/clayMaterial.js';

export class DebateMode {
  constructor(charA, charB, uiCallbacks) {
    this.charA = charA;
    this.charB = charB;
    this.uiCallbacks = uiCallbacks;

    this.active = false;
    this.isRunning = false;
    this.isGenerating = false;
    this.currentTopic = "Le libre arbitre existe-t-il dans un corps en argile ?";
    this.conversationHistory = [];
    this.currentSpeaker = 'A';
    this.readTimer = 0;
    this.readDuration = 4.5; // Durée de lecture confortable de la bulle BD
    this.loopCount = 0;

    this.sceneGroup = new THREE.Group();
    this.sceneGroup.name = "DebateScene";
    this.sceneGroup.visible = false;
    this._buildEnvironment();
  }

  /**
   * Construction du Menhir Gauloise Sculpté (Véritable Monolithe d'Argile avec bruit procédural et mousse)
   */
  _buildEnvironment() {
    const menhirGroup = new THREE.Group();
    menhirGroup.position.set(0.4, 0, -3.4);

    // 1. Géométrie de monolithe rocheux irrégulier (pas un cône brut !)
    const height = 3.6;
    const radialSegs = 32;
    const heightSegs = 36;
    const menhirGeom = new THREE.CylinderGeometry(0.38, 1.05, height, radialSegs, heightSegs);

    const pos = menhirGeom.attributes.position;
    const v = new THREE.Vector3();

    for (let i = 0; i < pos.count; i++) {
      v.fromBufferAttribute(pos, i);

      const normY = (v.y + height * 0.5) / height; // 0 (bas) à 1 (sommet)

      // Galbe typique du menhir gaulois d'Obélix : renflé au milieu, pointe arrondie asymétrique
      const bulge = Math.sin(normY * Math.PI * 0.85) * 0.38;
      v.x *= (1.0 + bulge);
      v.z *= (0.75 + bulge * 0.7); // Section ovale aplatie

      // Bruit procédural pour facettes de pierre taillée, bosses d'argile et aspérités
      const angle = Math.atan2(v.z, v.x);
      const noise1 = Math.sin(angle * 4.0 + v.y * 3.5) * 0.08;
      const noise2 = Math.cos(angle * 7.0 - v.y * 5.0) * 0.045;
      const noise3 = Math.sin(v.y * 12.0) * 0.025;
      const totalNoise = (noise1 + noise2 + noise3);

      v.x += Math.cos(angle) * totalNoise;
      v.z += Math.sin(angle) * totalNoise;

      // Courbure organique du sommet vers l'arrière
      if (normY > 0.7) {
        const tipFactor = (normY - 0.7) / 0.3;
        v.z -= tipFactor * tipFactor * 0.22;
        v.x += Math.sin(tipFactor * Math.PI) * 0.08;
      }

      pos.setXYZ(i, v.x, v.y, v.z);
    }

    menhirGeom.computeVertexNormals();

    const matRock = createClayMaterial(CLAY_PALETTE.menhirRock, {
      roughness: 0.88,
      metalness: 0.03,
      bumpScale: 0.06
    });

    const menhirMesh = new THREE.Mesh(menhirGeom, matRock);
    menhirMesh.position.y = height * 0.5 - 0.15;
    menhirMesh.rotation.y = 0.35;
    menhirMesh.castShadow = true;
    menhirMesh.receiveShadow = true;
    menhirGroup.add(menhirMesh);

    // 2. Plaques de mousse végétale d'argile incrustées sur les flancs
    const matMoss = createClayMaterial(CLAY_PALETTE.menhirMoss, {
      roughness: 0.92,
      bumpScale: 0.08
    });

    const mossPositions = [
      { y: 0.8, angle: 0.4, scale: 0.32 },
      { y: 1.4, angle: -1.2, scale: 0.28 },
      { y: 0.5, angle: 2.1, scale: 0.38 },
      { y: 1.9, angle: 0.8, scale: 0.22 }
    ];

    mossPositions.forEach(mp => {
      const mossGeom = new THREE.SphereGeometry(mp.scale, 10, 8);
      mossGeom.scale(1.2, 0.4, 0.8);
      const moss = new THREE.Mesh(mossGeom, matMoss);
      const r = 0.85;
      moss.position.set(Math.cos(mp.angle) * r, mp.y, Math.sin(mp.angle) * r * 0.75);
      moss.rotation.y = mp.angle;
      moss.rotation.z = 0.2;
      moss.castShadow = true;
      menhirGroup.add(moss);
    });

    // 3. Tertre de terre et galets au pied du menhir
    const baseMoundGeom = new THREE.CylinderGeometry(1.6, 2.1, 0.35, 18);
    const matEarth = createClayMaterial(0x6e2c00, { roughness: 0.90 });
    const mound = new THREE.Mesh(baseMoundGeom, matEarth);
    mound.position.y = 0.12;
    mound.receiveShadow = true;
    menhirGroup.add(mound);

    for (let p = 0; p < 7; p++) {
      const pebbleGeom = new THREE.SphereGeometry(0.12 + Math.random() * 0.10, 8, 6);
      pebbleGeom.scale(1.3, 0.65, 1.1);
      const pebble = new THREE.Mesh(pebbleGeom, matRock);
      const a = (p / 7) * Math.PI * 2 + Math.random() * 0.4;
      const d = 1.3 + Math.random() * 0.5;
      pebble.position.set(Math.cos(a) * d, 0.12, Math.sin(a) * d);
      pebble.rotation.y = Math.random() * Math.PI;
      pebble.castShadow = true;
      menhirGroup.add(pebble);
    }

    this.sceneGroup.add(menhirGroup);
  }

  enter() {
    this.active = true;
    this.sceneGroup.visible = true;

    // Positionnement face-à-face des compères
    this.charA.group.position.set(-1.6, 0, 0);
    this.charA.group.rotation.set(0, Math.PI * 0.35, 0);

    this.charB.group.position.set(1.6, 0, 0);
    this.charB.group.rotation.set(0, -Math.PI * 0.35, 0);

    this.charA.setAction('idle');
    this.charB.setAction('idle');

    if (this.uiCallbacks.onDebateStateChange) {
      this.uiCallbacks.onDebateStateChange(this.isRunning);
    }
  }

  exit() {
    this.stopDebate();
    this.active = false;
    this.sceneGroup.visible = false;
    if (this.uiCallbacks.hideBubbles) {
      this.uiCallbacks.hideBubbles();
    }
  }

  startDebate(topic) {
    if (topic && topic.trim().length > 0) {
      this.currentTopic = topic.trim();
    }

    this.isRunning = true;
    this.conversationHistory = [];
    this.currentSpeaker = 'A';
    this.readTimer = 0;
    this.loopCount = 0;

    if (this.uiCallbacks.onDebateStateChange) {
      this.uiCallbacks.onDebateStateChange(true);
    }

    this._triggerNextTurn();
  }

  stopDebate() {
    this.isRunning = false;
    this.isGenerating = false;
    this.readTimer = 0;

    this.charA.setAction('idle');
    this.charB.setAction('idle');

    if (this.uiCallbacks.onDebateStateChange) {
      this.uiCallbacks.onDebateStateChange(false);
    }
    if (this.uiCallbacks.onDebateStatus) {
      this.uiCallbacks.onDebateStatus("Débat en pause. Cliquez sur « Lancer le débat » pour reprendre.", false);
    }
  }

  async _triggerNextTurn() {
    if (!this.active || !this.isRunning || this.isGenerating) return;

    this.isGenerating = true;
    const speaker = this.currentSpeaker;
    const speakerName = (speaker === 'A' ? 'Astériclos (Thomiste)' : 'Obélicon (Cartésien)');

    // Animation de réflexion stop-motion
    if (speaker === 'A') {
      this.charA.setAction('think');
      this.charB.setAction('idle');
    } else {
      this.charB.setAction('think');
      this.charA.setAction('idle');
    }

    if (this.uiCallbacks.onDebateStatus) {
      this.uiCallbacks.onDebateStatus(`${speakerName} réfléchit en direct avec Gemini...`, true);
    }

    try {
      const text = await geminiService.generateTurn(speaker, this.currentTopic, this.conversationHistory);

      if (!this.isRunning) return; // Arrêt utilisateur pendant l'appel

      this.conversationHistory.push({ speaker, text });
      this.isGenerating = false;
      this.readTimer = 0;
      this.loopCount++;

      // Son de bulle BD pop
      sounds.playBubblePop();

      // Prise de parole comique en stop-motion
      if (speaker === 'A') {
        this.charA.setAction('talk');
        this.charB.setAction('think');
        if (this.uiCallbacks.showBubbleA) this.uiCallbacks.showBubbleA(text);
        if (this.uiCallbacks.hideBubbleB) this.uiCallbacks.hideBubbleB();
      } else {
        this.charB.setAction('talk');
        this.charA.setAction('shrug');
        if (this.uiCallbacks.showBubbleB) this.uiCallbacks.showBubbleB(text);
        if (this.uiCallbacks.hideBubbleA) this.uiCallbacks.hideBubbleA();
      }

      if (this.uiCallbacks.onDebateStatus) {
        this.uiCallbacks.onDebateStatus(`Débat en cours (Échange #${this.loopCount}) : « ${this.currentTopic} »`, false);
      }

    } catch (err) {
      console.error("[DEBATE-ERROR]", err);
      this.isGenerating = false;

      // Affichage de l'erreur dans l'UI sans bloquer
      if (this.uiCallbacks.onDebateError) {
        this.uiCallbacks.onDebateError(err.message || "Erreur de connexion à l'API Gemini.");
      }

      // Si erreur critique d'authentification ou quota, on met en pause
      this.stopDebate();
    }
  }

  update(delta) {
    if (!this.active || !this.isRunning) return;

    // Si la réplique actuelle a été affichée et n'attend plus de requête
    if (!this.isGenerating && this.conversationHistory.length > 0) {
      this.readTimer += delta;

      if (this.readTimer >= this.readDuration) {
        this.readTimer = 0;
        // Basculement infini vers l'autre personnage
        this.currentSpeaker = (this.currentSpeaker === 'A' ? 'B' : 'A');
        this._triggerNextTurn();
      }
    }
  }
}

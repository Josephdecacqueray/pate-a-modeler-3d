import * as THREE from 'three';
import { geminiService } from '../services/geminiService.js';
import { sounds } from '../audio/soundEffects.js';

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
    this.readDuration = 4.2; // Temps de lecture de la bulle avant réplique suivante
    this.abortController = null;

    this.sceneGroup = new THREE.Group();
    this.sceneGroup.name = "DebateScene";
    this.sceneGroup.visible = false;
    this._buildEnvironment();
  }

  _buildEnvironment() {
    // Menhir sculpté en argile dans le décor
    const menhirGeom = new THREE.ConeGeometry(0.7, 2.6, 8);
    menhirGeom.scale(1.2, 1.0, 0.75);
    const menhirMat = new THREE.MeshStandardMaterial({
      color: 0x95a5a6,
      roughness: 0.88,
      metalness: 0.05
    });
    const menhir = new THREE.Mesh(menhirGeom, menhirMat);
    menhir.position.set(0, 1.3, -2.4);
    menhir.castShadow = true;
    menhir.receiveShadow = true;
    this.sceneGroup.add(menhir);
  }

  enter() {
    this.active = true;
    this.sceneGroup.visible = true;

    // Positionnement face-à-face des philosophes
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

    if (!geminiService.hasApiKey()) {
      if (this.uiCallbacks.onDebateError) {
        this.uiCallbacks.onDebateError("Veuillez saisir votre clé API Gemini (bouton 🔑) pour lancer le débat en direct !");
      }
      return;
    }

    this.isRunning = true;
    this.conversationHistory = [];
    this.currentSpeaker = 'A';
    this.readTimer = 0;

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

    // Animation d'attente / réflexion
    if (speaker === 'A') {
      this.charA.setAction('think');
      this.charB.setAction('idle');
    } else {
      this.charB.setAction('think');
      this.charA.setAction('idle');
    }

    if (this.uiCallbacks.onDebateStatus) {
      const speakerName = speaker === 'A' ? 'Astériclos (Réaliste)' : 'Obélicon (Cartésien)';
      this.uiCallbacks.onDebateStatus(`${speakerName} réfléchit en direct avec Gemini...`, true);
    }

    try {
      const text = await geminiService.generateTurn(speaker, this.currentTopic, this.conversationHistory);
      
      if (!this.isRunning) return; // Si arrêté pendant la requête

      // Ajoute à l'historique
      this.conversationHistory.push({ speaker, text });
      this.isGenerating = false;
      this.readTimer = 0;

      // Son de bulle BD
      sounds.playBubblePop();

      // Mise en scène stop-motion de la prise de parole
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
        this.uiCallbacks.onDebateStatus(`Débat en cours sur : « ${this.currentTopic} » (Ping-Pong infini actif)`, false);
      }

    } catch (err) {
      console.error("Erreur génération débat Gemini :", err);
      this.isGenerating = false;
      this.stopDebate();

      if (this.uiCallbacks.onDebateError) {
        this.uiCallbacks.onDebateError(err.message || "Erreur de connexion à l'API Gemini.");
      }
    }
  }

  update(delta) {
    if (!this.active || !this.isRunning) return;

    // Si on a affiché une réplique et qu'on n'est pas en cours de génération
    if (!this.isGenerating && this.conversationHistory.length > 0) {
      this.readTimer += delta;

      if (this.readTimer >= this.readDuration) {
        this.readTimer = 0;
        // Alterne le locuteur pour le ping-pong infini
        this.currentSpeaker = this.currentSpeaker === 'A' ? 'B' : 'A';
        this._triggerNextTurn();
      }
    }
  }
}

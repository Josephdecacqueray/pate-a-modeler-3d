import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { SSAOPass } from 'three/addons/postprocessing/SSAOPass.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

import { createClayMaterial, CLAY_PALETTE } from './materials/clayMaterial.js';
import { ClayCharacter } from './characters/clayCharacter.js';
import { DebateMode } from './modes/debateMode.js';
import { SoccerMode } from './modes/soccerMode.js';
import { TridentineMode } from './modes/tridentineMode.js';
import { EmmanuelMode } from './modes/emmanuelMode.js';
import { geminiService } from './services/geminiService.js';
import { sounds } from './audio/soundEffects.js';

class ClayGameApp {
  constructor() {
    this.container = document.getElementById('canvas-container');
    this.clock = new THREE.Clock();

    // 1. Scène Three.js
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0xd6eaf8);

    // 2. Caméra Cinématographique
    this.camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      60
    );
    this.camera.position.set(0, 3.4, 7.8);
    this.camera.lookAt(0, 1.1, 0);

    // 3. Renderer WebGL avec ACESFilmicToneMapping et ombres PCF douces
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false, powerPreference: 'high-performance' });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.25;
    this.container.appendChild(this.renderer.domElement);

    // 4. Contrôles orbitaux fluides (60+ FPS)
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.06;
    this.controls.target.set(0, 1.1, 0);
    this.controls.minDistance = 3.5;
    this.controls.maxDistance = 16.0;
    this.controls.maxPolarAngle = Math.PI * 0.48;

    // 5. Éclairage Studio Pâte à Modeler (Key, Ambient, Rim Light SSS)
    this._setupLighting();

    // 6. Sol modelé en argile
    this._setupGround();

    // 7. Personnages anatomiques gaulois sculptés
    this.charA = new ClayCharacter('A', {
      name: 'Astériclos',
      tunicColor: CLAY_PALETTE.gauloisBlue,
      mustacheColor: CLAY_PALETTE.mustacheRed,
      scale: 0.98
    });
    this.charB = new ClayCharacter('B', {
      name: 'Obélicon',
      tunicColor: CLAY_PALETTE.tunicWhite,
      mustacheColor: CLAY_PALETTE.mustacheBlonde,
      scale: 1.22
    });
    this.scene.add(this.charA.group);
    this.scene.add(this.charB.group);

    // 8. Pipeline Post-Processing Cinématographique (SSAO + Soft Bloom + OutputPass)
    this._setupPostProcessing();

    // 9. Initialisation des 4 modes
    this.modes = {
      debate: new DebateMode(this.charA, this.charB, this._createDebateUICallbacks()),
      soccer: new SoccerMode(this.charA, this.charB, this._createSoccerUICallbacks(), this.camera, this.renderer.domElement),
      tridentine: new TridentineMode(this.charA, this.charB, this._createTridentineUICallbacks()),
      emmanuel: new EmmanuelMode(this.charA, this.charB, this._createEmmanuelUICallbacks())
    };

    this.currentModeName = 'debate';
    Object.values(this.modes).forEach(m => {
      this.scene.add(m.sceneGroup);
      m.sceneGroup.visible = false;
    });

    // 10. Liaison de l'interface HUD
    this._bindUI();
    this._updateApiKeyStatus();

    // Démarrage
    this.switchMode('debate');

    // Redimensionnement
    window.addEventListener('resize', () => this._onResize());

    // Boucle de rendu
    this._animate();
  }

  _setupLighting() {
    this.ambientLight = new THREE.AmbientLight(0xfff5e6, 0.90);
    this.scene.add(this.ambientLight);

    this.dirLight = new THREE.DirectionalLight(0xfffaec, 1.55);
    this.dirLight.position.set(4.5, 9.0, 5.5);
    this.dirLight.castShadow = true;
    this.dirLight.shadow.mapSize.width = 2048;
    this.dirLight.shadow.mapSize.height = 2048;
    this.dirLight.shadow.camera.near = 0.5;
    this.dirLight.shadow.camera.far = 28;
    this.dirLight.shadow.camera.left = -7;
    this.dirLight.shadow.camera.right = 7;
    this.dirLight.shadow.camera.top = 7;
    this.dirLight.shadow.camera.bottom = -7;
    this.dirLight.shadow.bias = -0.0004;
    this.scene.add(this.dirLight);

    this.rimLight = new THREE.DirectionalLight(0xff8c42, 1.1);
    this.rimLight.position.set(-6, 5, -5);
    this.scene.add(this.rimLight);
  }

  _setupGround() {
    const groundGeom = new THREE.CylinderGeometry(9.0, 9.5, 0.45, 40);
    const groundMat = createClayMaterial(CLAY_PALETTE.turfGreen, { roughness: 0.85 });
    this.groundMesh = new THREE.Mesh(groundGeom, groundMat);
    this.groundMesh.position.y = -0.22;
    this.groundMesh.receiveShadow = true;
    this.scene.add(this.groundMesh);
  }

  _setupPostProcessing() {
    const w = window.innerWidth;
    const h = window.innerHeight;

    this.composer = new EffectComposer(this.renderer);

    const renderPass = new RenderPass(this.scene, this.camera);
    this.composer.addPass(renderPass);

    try {
      this.ssaoPass = new SSAOPass(this.scene, this.camera, w, h);
      this.ssaoPass.kernelRadius = 0.75;
      this.ssaoPass.minDistance = 0.004;
      this.ssaoPass.maxDistance = 0.12;
      this.ssaoPass.output = SSAOPass.OUTPUT.Default;
      this.composer.addPass(this.ssaoPass);
    } catch (e) {
      console.warn("SSAO non disponible, passage au rendu direct", e);
    }

    this.bloomPass = new UnrealBloomPass(
      new THREE.Vector2(w, h),
      0.30,
      0.45,
      0.82
    );
    this.composer.addPass(this.bloomPass);

    const outputPass = new OutputPass();
    this.composer.addPass(outputPass);
  }

  switchMode(modeKey) {
    if (!this.modes[modeKey]) return;

    if (this.currentMode) {
      this.currentMode.exit();
    }

    // Masquage explicite de toutes les scènes pour éviter les superpositions de décors
    Object.values(this.modes).forEach(m => {
      m.sceneGroup.visible = false;
    });

    this.currentModeName = modeKey;
    this.currentMode = this.modes[modeKey];

    this._adaptAtmosphere(modeKey);
    this.currentMode.enter();
    this.currentMode.sceneGroup.visible = true;

    document.querySelectorAll('.mode-tab').forEach(tab => {
      tab.classList.toggle('active', tab.dataset.mode === modeKey);
    });

    document.querySelectorAll('.mode-panel').forEach(panel => {
      panel.classList.toggle('active', panel.id === `panel-${modeKey}`);
    });
  }

  _adaptAtmosphere(modeKey) {
    switch (modeKey) {
      case 'tridentine':
        this.scene.background.set(0x1a1520);
        this.ambientLight.color.set(0x5a4a60);
        this.ambientLight.intensity = 0.40;
        this.dirLight.color.set(0xffeedd);
        this.dirLight.intensity = 0.55;
        this.rimLight.color.set(0xff7722);
        this.rimLight.intensity = 0.8;
        if (this.bloomPass) this.bloomPass.strength = 0.45;
        break;

      case 'emmanuel':
        this.scene.background.set(0xfff9e6);
        this.ambientLight.color.set(0xfff3cc);
        this.ambientLight.intensity = 1.35;
        this.dirLight.color.set(0xfffaed);
        this.dirLight.intensity = 1.65;
        this.rimLight.color.set(0xffd54f);
        this.rimLight.intensity = 1.1;
        if (this.bloomPass) this.bloomPass.strength = 0.35;
        break;

      case 'soccer':
        this.scene.background.set(0x87ceeb);
        this.ambientLight.color.set(0xffffff);
        this.ambientLight.intensity = 1.05;
        this.dirLight.color.set(0xfffff0);
        this.dirLight.intensity = 1.55;
        this.rimLight.color.set(0x81c784);
        this.rimLight.intensity = 0.7;
        if (this.bloomPass) this.bloomPass.strength = 0.20;
        break;

      case 'debate':
      default:
        this.scene.background.set(0xd6eaf8);
        this.ambientLight.color.set(0xfff5e6);
        this.ambientLight.intensity = 0.95;
        this.dirLight.color.set(0xfff1dc);
        this.dirLight.intensity = 1.50;
        this.rimLight.color.set(0xff8c42);
        this.rimLight.intensity = 0.90;
        if (this.bloomPass) this.bloomPass.strength = 0.25;
        break;
    }
  }

  _updateSpeechBubbles() {
    if (this.currentModeName !== 'debate') return;

    const updateBubblePos = (char, bubbleElem) => {
      if (!bubbleElem || bubbleElem.style.display === 'none') return;
      const headWorldPos = new THREE.Vector3();
      char.head.getWorldPosition(headWorldPos);
      headWorldPos.y += 0.82;

      const screenPos = headWorldPos.project(this.camera);
      const x = (screenPos.x * 0.5 + 0.5) * window.innerWidth;
      const y = (-(screenPos.y * 0.5) + 0.5) * window.innerHeight;

      bubbleElem.style.left = `${x}px`;
      bubbleElem.style.top = `${y}px`;
    };

    updateBubblePos(this.charA, document.getElementById('bubble-a'));
    updateBubblePos(this.charB, document.getElementById('bubble-b'));
  }

  _createDebateUICallbacks() {
    const bubbleA = document.getElementById('bubble-a');
    const bubbleB = document.getElementById('bubble-b');
    const statusElem = document.getElementById('debate-status-text');
    const btnStart = document.getElementById('btn-debate-start');
    const btnStop = document.getElementById('btn-debate-stop');

    return {
      showBubbleA: (text) => {
        if (!bubbleA) return;
        bubbleA.querySelector('.bubble-text').textContent = text;
        bubbleA.style.display = 'block';
        bubbleA.classList.remove('pop-anim');
        void bubbleA.offsetWidth;
        bubbleA.classList.add('pop-anim');
      },
      hideBubbleA: () => {
        if (bubbleA) bubbleA.style.display = 'none';
      },
      showBubbleB: (text) => {
        if (!bubbleB) return;
        bubbleB.querySelector('.bubble-text').textContent = text;
        bubbleB.style.display = 'block';
        bubbleB.classList.remove('pop-anim');
        void bubbleB.offsetWidth;
        bubbleB.classList.add('pop-anim');
      },
      hideBubbleB: () => {
        if (bubbleB) bubbleB.style.display = 'none';
      },
      hideBubbles: () => {
        if (bubbleA) bubbleA.style.display = 'none';
        if (bubbleB) bubbleB.style.display = 'none';
      },
      onDebateStatus: (msg, isThinking) => {
        if (statusElem) {
          statusElem.textContent = msg;
          statusElem.classList.toggle('thinking', !!isThinking);
          statusElem.classList.remove('error');
        }
      },
      onDebateError: (errMsg) => {
        if (statusElem) {
          statusElem.textContent = `⚠️ ${errMsg}`;
          statusElem.classList.add('error');
          statusElem.classList.remove('thinking');
        }
      },
      onDebateStateChange: (isRunning) => {
        if (btnStart) btnStart.style.display = isRunning ? 'none' : 'inline-flex';
        if (btnStop) btnStop.style.display = isRunning ? 'inline-flex' : 'none';
      }
    };
  }

  _createSoccerUICallbacks() {
    const scoreElem = document.getElementById('soccer-score-display');
    const bannerElem = document.getElementById('soccer-goal-banner');

    return {
      onSoccerScore: (sA, sB) => {
        if (scoreElem) {
          scoreElem.textContent = `Astériclos  ${sA} - ${sB}  Obélicon`;
        }
      },
      onGoalBanner: (text) => {
        if (bannerElem) {
          bannerElem.textContent = text;
          bannerElem.style.display = 'block';
          bannerElem.classList.remove('goal-anim');
          void bannerElem.offsetWidth;
          bannerElem.classList.add('goal-anim');
        }
      },
      hideGoalBanner: () => {
        if (bannerElem) bannerElem.style.display = 'none';
      }
    };
  }

  _createTridentineUICallbacks() {
    const latinElem = document.getElementById('tridentine-latin');
    const frenchElem = document.getElementById('tridentine-french');
    const speakerElem = document.getElementById('tridentine-speaker');
    const progressElem = document.getElementById('tridentine-progress');

    return {
      onTridentineStep: (stepData, current, total) => {
        if (latinElem) latinElem.textContent = stepData.latin;
        if (frenchElem) frenchElem.textContent = stepData.french;
        if (speakerElem) speakerElem.textContent = stepData.speaker;
        if (progressElem) progressElem.textContent = `${current} / ${total}`;
      }
    };
  }

  _createEmmanuelUICallbacks() {
    const refrainElem = document.getElementById('emmanuel-refrain');
    const verseElem = document.getElementById('emmanuel-verse');
    const categoryElem = document.getElementById('emmanuel-category');
    const progressElem = document.getElementById('emmanuel-progress');

    return {
      onEmmanuelStep: (songData, current, total) => {
        if (refrainElem) refrainElem.textContent = songData.refrain;
        if (verseElem) verseElem.textContent = songData.verse;
        if (categoryElem) categoryElem.textContent = songData.category;
        if (progressElem) progressElem.textContent = `${current} / ${total}`;
      }
    };
  }

  _bindUI() {
    // Onglets de modes
    document.querySelectorAll('.mode-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        sounds.playFootstep();
        this.switchMode(tab.dataset.mode);
      });
    });

    // Bouton de son
    const soundBtn = document.getElementById('btn-sound-toggle');
    if (soundBtn) {
      soundBtn.addEventListener('click', () => {
        const isMuted = sounds.toggleMute();
        soundBtn.textContent = isMuted ? '🔇' : '🔊';
      });
    }

    // Bouton Mode Cinéma (Vue Dégagée)
    const cinemaBtn = document.getElementById('btn-cinema-toggle');
    if (cinemaBtn) {
      cinemaBtn.addEventListener('click', () => {
        document.body.classList.toggle('cinema-mode');
        const isCinema = document.body.classList.contains('cinema-mode');
        cinemaBtn.textContent = isCinema ? '👁️ Quitter Cinéma' : '🎬 Mode Cinéma';
      });
    }

    // Modal Clé API
    const keyBtn = document.getElementById('btn-key-modal');
    const modal = document.getElementById('api-key-modal');
    const closeModal = document.getElementById('btn-close-modal');
    const saveKeyBtn = document.getElementById('btn-save-key');
    const clearKeyBtn = document.getElementById('btn-clear-key');
    const apiKeyInput = document.getElementById('input-api-key');

    if (keyBtn && modal) {
      keyBtn.addEventListener('click', () => {
        modal.classList.add('active');
        if (geminiService.apiKey) apiKeyInput.value = geminiService.apiKey;
      });
    }

    if (closeModal && modal) {
      closeModal.addEventListener('click', () => modal.classList.remove('active'));
    }

    if (saveKeyBtn && apiKeyInput) {
      saveKeyBtn.addEventListener('click', () => {
        const key = apiKeyInput.value.trim();
        geminiService.setApiKey(key);
        this._updateApiKeyStatus();
        if (modal) modal.classList.remove('active');
      });
    }

    if (clearKeyBtn && apiKeyInput) {
      clearKeyBtn.addEventListener('click', () => {
        apiKeyInput.value = '';
        geminiService.setApiKey('');
        this._updateApiKeyStatus();
        if (modal) modal.classList.remove('active');
      });
    }

    // Encart inline de saisie de clé API dans le panneau débat
    const inlineSaveBtn = document.getElementById('btn-save-key-inline');
    const inlineInput = document.getElementById('input-api-key-inline');
    if (inlineSaveBtn && inlineInput) {
      inlineSaveBtn.addEventListener('click', () => {
        const key = inlineInput.value.trim();
        if (key) {
          geminiService.setApiKey(key);
          this._updateApiKeyStatus();
        }
      });
    }

    // Contrôles Débat Infini
    const debateInput = document.getElementById('input-debate-topic');
    const debateStartBtn = document.getElementById('btn-debate-start');
    const debateStopBtn = document.getElementById('btn-debate-stop');
    const debateTopics = [
      "Le libre arbitre existe-t-il dans un corps en argile ?",
      "La forme substantielle précède-t-elle la plasticine ?",
      "Le monde extérieur est-il l'illusion d'un malin sculpteur ?",
      "Rien n'est dans l'intellect qui n'ait été dans les sens ?",
      "Le doute méthodique peut-il dissoudre un menhir ?",
      "L'âme pensante est-elle distincte de la pâte étendue ?"
    ];

    if (debateStartBtn && debateInput) {
      debateStartBtn.addEventListener('click', () => {
        const topic = debateInput.value.trim() || debateTopics[0];
        this.modes.debate.startDebate(topic);
      });
    }

    if (debateStopBtn) {
      debateStopBtn.addEventListener('click', () => {
        this.modes.debate.stopDebate();
      });
    }

    const debateRandomBtn = document.getElementById('btn-debate-random');
    if (debateRandomBtn && debateInput) {
      debateRandomBtn.addEventListener('click', () => {
        const randTopic = debateTopics[Math.floor(Math.random() * debateTopics.length)];
        debateInput.value = randTopic;
        this.modes.debate.startDebate(randTopic);
      });
    }

    // Réinitialisation de caméra
    const resetCamBtn = document.getElementById('btn-reset-cam');
    if (resetCamBtn) {
      resetCamBtn.addEventListener('click', () => {
        this.camera.position.set(0, 3.4, 7.8);
        this.controls.target.set(0, 1.1, 0);
        this.controls.update();
      });
    }

    // Mode Foot
    const soccerResetBtn = document.getElementById('btn-soccer-reset');
    if (soccerResetBtn) {
      soccerResetBtn.addEventListener('click', () => {
        this.modes.soccer.resetBall();
        sounds.playFootstep();
      });
    }

    // Mode Tridentin
    const triNextBtn = document.getElementById('btn-tri-next');
    const triPrevBtn = document.getElementById('btn-tri-prev');
    const triBellBtn = document.getElementById('btn-tri-bell');
    const triGenuflectBtn = document.getElementById('btn-tri-genuflect');
    const triBowBtn = document.getElementById('btn-tri-bow');

    if (triNextBtn) triNextBtn.addEventListener('click', () => this.modes.tridentine.nextStep());
    if (triPrevBtn) triPrevBtn.addEventListener('click', () => this.modes.tridentine.prevStep());
    if (triBellBtn) triBellBtn.addEventListener('click', () => this.modes.tridentine.ringBell());
    if (triGenuflectBtn) triGenuflectBtn.addEventListener('click', () => this.modes.tridentine.setManualPosture('genuflect'));
    if (triBowBtn) triBowBtn.addEventListener('click', () => this.modes.tridentine.setManualPosture('incurvatio'));

    // Mode Emmanuel
    const emmaNextBtn = document.getElementById('btn-emma-next');
    const emmaPrevBtn = document.getElementById('btn-emma-prev');
    const emmaOransBtn = document.getElementById('btn-emma-orans');
    const emmaClapBtn = document.getElementById('btn-emma-clap');
    const emmaDanceBtn = document.getElementById('btn-emma-dance');

    if (emmaNextBtn) emmaNextBtn.addEventListener('click', () => this.modes.emmanuel.nextStep());
    if (emmaPrevBtn) emmaPrevBtn.addEventListener('click', () => this.modes.emmanuel.prevStep());
    if (emmaOransBtn) emmaOransBtn.addEventListener('click', () => this.modes.emmanuel.setPosture('orans'));
    if (emmaClapBtn) emmaClapBtn.addEventListener('click', () => this.modes.emmanuel.setPosture('clap'));
    if (emmaDanceBtn) emmaDanceBtn.addEventListener('click', () => this.modes.emmanuel.setPosture('celebrate'));
  }

  _updateApiKeyStatus() {
    const status = geminiService.getStatus();
    const statusBadge = document.getElementById('api-status-badge');
    const modalStatus = document.getElementById('modal-key-status');
    const inlineBanner = document.getElementById('api-key-banner');

    if (statusBadge) {
      statusBadge.textContent = status.online ? '🟢 Gemini API Réelle' : '🔑 Clé requise';
      statusBadge.title = status.label;
      statusBadge.style.cursor = 'pointer';
      statusBadge.onclick = () => {
        const modal = document.getElementById('api-key-modal');
        if (modal) modal.classList.add('active');
      };
    }

    if (modalStatus) {
      modalStatus.textContent = status.label;
      modalStatus.className = status.online ? 'status-online' : 'status-offline';
    }

    if (inlineBanner) {
      inlineBanner.classList.toggle('visible', !geminiService.hasApiKey());
    }
  }

  _onResize() {
    const w = window.innerWidth;
    const h = window.innerHeight;
    this.camera.aspect = w / h;

    if (w < 768) {
      // Reculer la caméra sur écran vertical smartphone pour cadrer les deux compères en pied
      this.camera.position.set(0, 3.2, 10.8);
      this.controls.target.set(0, 0.95, 0);
    } else {
      this.camera.position.set(0, 3.4, 7.8);
      this.controls.target.set(0, 1.1, 0);
    }
    this.camera.updateProjectionMatrix();
    this.controls.update();

    this.renderer.setSize(w, h);
    if (this.composer) {
      this.composer.setSize(w, h);
    }
    if (this.ssaoPass) {
      this.ssaoPass.setSize(w, h);
    }
    if (this.bloomPass) {
      this.bloomPass.setSize(w, h);
    }
  }

  _animate() {
    requestAnimationFrame(() => this._animate());

    const delta = Math.min(this.clock.getDelta(), 0.1);
    const totalTime = this.clock.getElapsedTime();

    this.controls.update();

    this.charA.update(delta);
    this.charB.update(delta);

    if (this.currentMode) {
      this.currentMode.update(delta, totalTime);
    }

    this._updateSpeechBubbles();

    if (this.composer) {
      this.composer.render();
    } else {
      this.renderer.render(this.scene, this.camera);
    }
  }
}

window.addEventListener('DOMContentLoaded', () => {
  new ClayGameApp();
});

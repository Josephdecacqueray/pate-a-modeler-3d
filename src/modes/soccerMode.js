import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import { createClayMaterial, CLAY_PALETTE } from '../materials/clayMaterial.js';
import { sounds } from '../audio/soundEffects.js';
import { geminiService } from '../services/geminiService.js';

export class SoccerMode {
  constructor(charA, charB, uiCallbacks, camera, domElement) {
    this.charA = charA;
    this.charB = charB;
    this.uiCallbacks = uiCallbacks;
    this.camera = camera;
    this.domElement = domElement;

    this.active = false;
    this.scoreA = 0;
    this.scoreB = 0;
    this.isGoalCooldown = false;

    this.sceneGroup = new THREE.Group();
    this.sceneGroup.name = "SoccerScene";
    this.sceneGroup.visible = false;

    // Physique Cannon-es
    this.world = new CANNON.World();
    this.world.gravity.set(0, -9.82, 0);

    this.clayPhysicsMat = new CANNON.Material('clayBall');
    this.turfPhysicsMat = new CANNON.Material('turfGround');
    const contactMat = new CANNON.ContactMaterial(this.clayPhysicsMat, this.turfPhysicsMat, {
      friction: 0.52,
      restitution: 0.70 // Rebond vif d'argile modelée
    });
    this.world.addContactMaterial(contactMat);

    this.ballMesh = null;
    this.ballBody = null;
    this.kickArrow = null;

    this.isDragging = false;
    this.dragStartPoint = new THREE.Vector3();
    this.dragCurrentPoint = new THREE.Vector3();
    this.raycaster = new THREE.Raycaster();
    this.groundPlane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);

    this._buildField();
    this._buildBall();
    this._buildGoals();
    this._setupInteraction();
  }

  _buildField() {
    // Terrain de football en argile verte
    const pitchGeom = new THREE.PlaneGeometry(12.5, 8.0);
    pitchGeom.rotateX(-Math.PI / 2);
    const pitchMat = createClayMaterial(CLAY_PALETTE.turfGreen, { roughness: 0.82 });
    const pitch = new THREE.Mesh(pitchGeom, pitchMat);
    pitch.position.y = 0.01;
    pitch.receiveShadow = true;
    this.sceneGroup.add(pitch);

    // Lignes de craie blanches
    const lineMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
    
    // Cercle central
    const centerCircleGeom = new THREE.RingGeometry(1.2, 1.25, 32);
    centerCircleGeom.rotateX(-Math.PI / 2);
    const centerCircle = new THREE.Mesh(centerCircleGeom, lineMat);
    centerCircle.position.y = 0.015;
    this.sceneGroup.add(centerCircle);

    // Ligne médiane
    const midLineGeom = new THREE.PlaneGeometry(0.06, 8.0);
    midLineGeom.rotateX(-Math.PI / 2);
    const midLine = new THREE.Mesh(midLineGeom, lineMat);
    midLine.position.y = 0.015;
    this.sceneGroup.add(midLine);

    // Sol physique
    const groundBody = new CANNON.Body({
      type: CANNON.Body.STATIC,
      shape: new CANNON.Plane(),
      material: this.turfPhysicsMat
    });
    groundBody.quaternion.setFromAxisAngle(new CANNON.Vec3(1, 0, 0), -Math.PI / 2);
    this.world.addBody(groundBody);

    // Murs invisibles sur les limites du terrain
    const createWall = (x, z, hx, hz) => {
      const wallBody = new CANNON.Body({
        type: CANNON.Body.STATIC,
        shape: new CANNON.Box(new CANNON.Vec3(hx, 2, hz))
      });
      wallBody.position.set(x, 1, z);
      this.world.addBody(wallBody);
    };

    createWall(0, 4.2, 6.8, 0.2);
    createWall(0, -4.2, 6.8, 0.2);
    createWall(-6.4, 0, 0.2, 4.2);
    createWall(6.4, 0, 0.2, 4.2);
  }

  _buildGoals() {
    const postMat = createClayMaterial(CLAY_PALETTE.tunicWhite, { roughness: 0.65 });
    const netMat = new THREE.MeshStandardMaterial({
      color: 0xdddddd,
      wireframe: true,
      roughness: 0.9
    });

    const createGoal = (xSide) => {
      const goalGroup = new THREE.Group();
      goalGroup.position.set(xSide * 5.4, 0, 0);
      goalGroup.rotation.y = (xSide > 0 ? -Math.PI / 2 : Math.PI / 2);

      const postRadius = 0.065;
      const postHeight = 1.45;
      const goalWidth = 2.5;

      [-goalWidth / 2, goalWidth / 2].forEach(pX => {
        const postGeom = new THREE.CylinderGeometry(postRadius, postRadius, postHeight, 10);
        postGeom.translate(0, postHeight / 2, 0);
        const post = new THREE.Mesh(postGeom, postMat);
        post.position.set(pX, 0, 0);
        goalGroup.add(post);
      });

      const crossGeom = new THREE.CylinderGeometry(postRadius, postRadius, goalWidth, 10);
      crossGeom.rotateZ(Math.PI / 2);
      const cross = new THREE.Mesh(crossGeom, postMat);
      cross.position.set(0, postHeight, 0);
      goalGroup.add(cross);

      const netGeom = new THREE.BoxGeometry(goalWidth, postHeight, 0.9);
      const net = new THREE.Mesh(netGeom, netMat);
      net.position.set(0, postHeight / 2, -0.45);
      goalGroup.add(net);

      this.sceneGroup.add(goalGroup);
    };

    createGoal(-1);
    createGoal(1);
  }

  _buildBall() {
    const ballRadius = 0.32;

    const ballGeom = new THREE.SphereGeometry(ballRadius, 20, 16);
    const ballMat = createClayMaterial(CLAY_PALETTE.ballWhite, { roughness: 0.76, bumpScale: 0.05 });
    this.ballMesh = new THREE.Mesh(ballGeom, ballMat);
    this.ballMesh.castShadow = true;
    this.sceneGroup.add(this.ballMesh);

    // Pentagones d'argile noire
    const patchMat = createClayMaterial(CLAY_PALETTE.ballBlack, { roughness: 0.8 });
    const patchGeom = new THREE.CylinderGeometry(0.09, 0.09, 0.02, 5);
    patchGeom.rotateX(Math.PI / 2);

    for (let i = 0; i < 6; i++) {
      const patch = new THREE.Mesh(patchGeom, patchMat);
      const phi = Math.acos(-1 + (2 * i) / 6);
      const theta = Math.sqrt(6 * Math.PI) * phi;
      patch.position.setFromSphericalCoords(ballRadius * 0.99, phi, theta);
      patch.lookAt(0, 0, 0);
      this.ballMesh.add(patch);
    }

    this.ballBody = new CANNON.Body({
      mass: 0.85,
      shape: new CANNON.Sphere(ballRadius),
      material: this.clayPhysicsMat,
      linearDamping: 0.24,
      angularDamping: 0.28
    });
    this.ballBody.position.set(0, 0.35, 0);
    this.world.addBody(this.ballBody);

    const arrowGeom = new THREE.ConeGeometry(0.18, 0.6, 8);
    arrowGeom.rotateX(Math.PI / 2);
    const arrowMat = new THREE.MeshBasicMaterial({ color: 0xffea00 });
    this.kickArrow = new THREE.Mesh(arrowGeom, arrowMat);
    this.kickArrow.visible = false;
    this.sceneGroup.add(this.kickArrow);
  }

  _setupInteraction() {
    const getIntersection = (event) => {
      const rect = this.domElement.getBoundingClientRect();
      const clientX = event.touches ? event.touches[0].clientX : event.clientX;
      const clientY = event.touches ? event.touches[0].clientY : event.clientY;

      const x = ((clientX - rect.left) / rect.width) * 2 - 1;
      const y = -((clientY - rect.top) / rect.height) * 2 + 1;

      this.raycaster.setFromCamera({ x, y }, this.camera);
      const target = new THREE.Vector3();
      this.raycaster.ray.intersectPlane(this.groundPlane, target);
      return target;
    };

    this._onPointerDown = (e) => {
      if (!this.active) return;
      const pt = getIntersection(e);
      if (pt) {
        this.isDragging = true;
        this.dragStartPoint.copy(pt);
        this.dragCurrentPoint.copy(pt);
        this.kickArrow.position.copy(this.ballMesh.position);
        this.kickArrow.position.y = 0.15;
        this.kickArrow.visible = true;
      }
    };

    this._onPointerMove = (e) => {
      if (!this.active || !this.isDragging) return;
      const pt = getIntersection(e);
      if (pt) {
        this.dragCurrentPoint.copy(pt);
        const dir = new THREE.Vector3().subVectors(this.dragStartPoint, this.dragCurrentPoint);
        const len = Math.min(dir.length(), 4.5);
        if (len > 0.1) {
          dir.y = 0;
          dir.normalize();
          this.kickArrow.lookAt(
            this.kickArrow.position.x + dir.x,
            this.kickArrow.position.y,
            this.kickArrow.position.z + dir.z
          );
          this.kickArrow.scale.set(1, 1, Math.max(1, len * 1.5));
        }
      }
    };

    this._onPointerUp = (e) => {
      if (!this.active || !this.isDragging) return;
      this.isDragging = false;
      this.kickArrow.visible = false;

      const forceVec = new THREE.Vector3().subVectors(this.dragStartPoint, this.dragCurrentPoint);
      const power = Math.min(forceVec.length() * 4.8, 20.0);

      if (power > 1.2) {
        forceVec.y = 0.38 * power;
        forceVec.x *= 4.8;
        forceVec.z *= 4.8;

        this.ballBody.applyImpulse(
          new CANNON.Vec3(forceVec.x, forceVec.y, forceVec.z),
          this.ballBody.position
        );
        sounds.playKick();
      } else {
        // Simple clic / tap sur le terrain : passe / tir dirigé vers le point cliqué
        const toClick = new THREE.Vector3().subVectors(this.dragStartPoint, this.ballMesh.position);
        toClick.y = 0.35 * Math.min(toClick.length(), 3.5);
        const passPower = Math.min(toClick.length() * 2.8, 14.0);
        toClick.normalize().multiplyScalar(passPower);

        this.ballBody.applyImpulse(
          new CANNON.Vec3(toClick.x, toClick.y + 2.0, toClick.z),
          this.ballBody.position
        );
        sounds.playKick();
      }
    };

    this.domElement.addEventListener('pointerdown', this._onPointerDown);
    window.addEventListener('pointermove', this._onPointerMove);
    window.addEventListener('pointerup', this._onPointerUp);
  }

  enter() {
    this.active = true;
    this.sceneGroup.visible = true;
    this.resetBall();

    this.charA.group.position.set(-2.8, 0, 0);
    this.charA.group.rotation.set(0, Math.PI / 2, 0);
    this.charB.group.position.set(2.8, 0, 0);
    this.charB.group.rotation.set(0, -Math.PI / 2, 0);

    this.charA.setAction('idle');
    this.charB.setAction('idle');

    this._updateScoreUI();
  }

  exit() {
    this.active = false;
    this.sceneGroup.visible = false;
    this.kickArrow.visible = false;
    this.isDragging = false;
  }

  resetBall() {
    this.ballBody.position.set(0, 0.8, 0);
    this.ballBody.velocity.set(0, 0, 0);
    this.ballBody.angularVelocity.set(0, 0, 0);
    this.isGoalCooldown = false;
  }

  _updateScoreUI() {
    if (this.uiCallbacks.onSoccerScore) {
      this.uiCallbacks.onSoccerScore(this.scoreA, this.scoreB);
    }
  }

  _triggerGoal(scorerName, team) {
    if (this.isGoalCooldown) return;
    this.isGoalCooldown = true;

    if (team === 'A') {
      this.scoreA++;
      this.charA.setAction('celebrate');
      this.charB.setAction('shrug');
    } else {
      this.scoreB++;
      this.charB.setAction('celebrate');
      this.charA.setAction('shrug');
    }

    sounds.playGoal();
    this._updateScoreUI();

    if (this.uiCallbacks.onGoalBanner) {
      this.uiCallbacks.onGoalBanner(`⚽ BUUUUT DE ${scorerName.toUpperCase()} ! 🎉`);
    }

    // Réplique comique générée en direct par l'API Gemini selon le bonhomme
    geminiService.generateSoccerReaction(`BUUUUT magistral de ${scorerName} !`, scorerName)
      .then(reaction => {
        if (team === 'A') {
          if (this.uiCallbacks.showBubbleA) this.uiCallbacks.showBubbleA(reaction);
        } else {
          if (this.uiCallbacks.showBubbleB) this.uiCallbacks.showBubbleB(reaction);
        }
        setTimeout(() => {
          if (this.uiCallbacks.hideBubbles) this.uiCallbacks.hideBubbles();
        }, 3200);
      })
      .catch(() => {});

    // Remise en jeu automatique au centre
    setTimeout(() => {
      this.resetBall();
      this.charA.setAction('idle');
      this.charB.setAction('idle');
      if (this.uiCallbacks.hideGoalBanner) {
        this.uiCallbacks.hideGoalBanner();
      }
    }, 3200);
  }

  update(delta) {
    if (!this.active) return;

    this.world.step(1 / 60, delta, 3);

    this.ballMesh.position.copy(this.ballBody.position);
    this.ballMesh.quaternion.copy(this.ballBody.quaternion);

    // Détection de but (x < -5.0 ou x > 5.0)
    if (!this.isGoalCooldown) {
      const bPos = this.ballBody.position;
      if (bPos.x < -5.0 && Math.abs(bPos.z) < 1.4) {
        this._triggerGoal(this.charB.name, 'B');
      } else if (bPos.x > 5.0 && Math.abs(bPos.z) < 1.4) {
        this._triggerGoal(this.charA.name, 'A');
      }
    }

    // IA des Gaulois footballeurs
    if (!this.isGoalCooldown) {
      this._updateAI(delta, this.charA, -1);
      this._updateAI(delta, this.charB, 1);
    }
  }

  _updateAI(delta, character, teamSide) {
    const ballPos = this.ballMesh.position;
    const charPos = character.group.position;
    const distToBall = charPos.distanceTo(ballPos);

    const isBallInMyZone = (teamSide < 0 ? ballPos.x < 1.4 : ballPos.x > -1.4);

    if (isBallInMyZone) {
      // Pivot en douceur vers le ballon
      const targetAngle = Math.atan2(ballPos.x - charPos.x, ballPos.z - charPos.z);
      let diff = (targetAngle - character.group.rotation.y) % (Math.PI * 2);
      if (diff < -Math.PI) diff += Math.PI * 2;
      if (diff > Math.PI) diff -= Math.PI * 2;
      character.group.rotation.y += diff * Math.min(1.0, 7.5 * delta);

      if (distToBall > 0.95) {
        character.setAction('run');
        const dir = new THREE.Vector3().subVectors(ballPos, charPos).normalize();
        charPos.x += dir.x * 2.4 * delta;
        charPos.z += dir.z * 2.4 * delta;
      } else {
        character.setAction('kick');
        sounds.playKick();

        const targetX = -teamSide * 5.4;
        const kickDir = new THREE.Vector3(targetX - charPos.x, 1.2, (Math.random() - 0.5) * 1.6).normalize();
        const kickPower = 9.5 + Math.random() * 5.0;

        this.ballBody.applyImpulse(
          new CANNON.Vec3(kickDir.x * kickPower, 3.4, kickDir.z * kickPower),
          this.ballBody.position
        );

        // Réaction en direct sur frappe puissante (avec temporisation de confort)
        const now = Date.now();
        if (!this.lastKickReactionTime || (now - this.lastKickReactionTime > 7500)) {
          this.lastKickReactionTime = now;
          geminiService.generateSoccerReaction(`Frappe puissante vers les cages`, character.name)
            .then(comment => {
              if (teamSide < 0) {
                if (this.uiCallbacks.showBubbleA) this.uiCallbacks.showBubbleA(comment);
              } else {
                if (this.uiCallbacks.showBubbleB) this.uiCallbacks.showBubbleB(comment);
              }
              setTimeout(() => {
                if (this.uiCallbacks.hideBubbles) this.uiCallbacks.hideBubbles();
              }, 2600);
            })
            .catch(() => {});
        }
      }
    } else {
      const homeX = teamSide * 2.8;
      const homeZ = 0;
      const distHome = Math.hypot(charPos.x - homeX, charPos.z - homeZ);

      if (distHome > 0.45) {
        character.setAction('run');
        character.group.lookAt(homeX, charPos.y, homeZ);
        charPos.x += (homeX - charPos.x) * 1.5 * delta;
        charPos.z += (homeZ - charPos.z) * 1.5 * delta;
      } else {
        character.setAction('idle');
        character.group.rotation.y = (teamSide < 0 ? Math.PI / 2 : -Math.PI / 2);
      }
    }
  }

  destroy() {
    this.domElement.removeEventListener('pointerdown', this._onPointerDown);
    window.removeEventListener('pointermove', this._onPointerMove);
    window.removeEventListener('pointerup', this._onPointerUp);
  }
}

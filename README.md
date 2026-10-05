# 🏺 Astérix & Obélix : Mini-jeu 3D "Pâte à Modeler" (Claymation Web SPA)

Application Web 3D interactive monopage (SPA) haut de gamme développée avec **Three.js**, **Cannon-es**, des shaders de pâte à modeler procéduraux avec diffusion sous-surfacique (SSS) et l'**API Google Gemini** en direct.

Inspiré par la direction artistique de Mikros Image pour le film d'animation *"Astérix : Le Domaine des dieux"*.

![Capture Desktop](https://raw.githubusercontent.com/Josephdecacqueray/pate-a-modeler-3d/main/screenshots/desktop_overview.png)

---

## ✨ Points Forts & Direction Artistique

- **Rendu Plastique & Argile Procédurale :**
  - Shaders personnalisés injectant des empreintes digitales spiralées d'Archimède, des micro-griffures à l'ébauchoir et des aspérités de modelage.
  - Vrai shader de diffusion sous-surfacique (*Subsurface Scattering* / SSS) pour un rendu d'argile tendre et translucide sur les contours.
  - Matériaux satinés mats (`roughness: 0.78`) sans reflet plastique.
  - Post-processing complet (*UnrealBloomPass*, *SSAO*, *ACESFilmicToneMapping*).
- **Animation Stop-Motion Cadencée à 20 FPS :**
  - Quantification temporelle stricte (`Math.floor(time * 20) / 20`) sur les déformations squelettiques et les expressions faciales, reproduisant fidèlement l'animation image par image artisanale.
  - Le moteur de rendu, les ombres, la caméra OrbitControls et la physique restent à **60+ FPS fluides**.
- **Modélisation Anatomique Sculptée :**
  - Gros nez ronds Uderzo, moustaches tombantes aux mèches modelées, paupières mobiles, ceinturons à boucle, ventres ronds et **4 doigts façonnés individuellement** par main.
- **Mode Cinéma & Ergonomie Mobile :**
  - Raccourci `F2` ou bouton caméra pour masquer complètement l'interface et profiter de la scène 3D sans obstruction.
  - Layout réactif `100dvh` optimisé pour smartphones et tablettes.

---

## 🎮 4 Modes de Jeu Interactifs

### 1. 🏛️ Débat Philosophique & Réflexion (100% Direct Gemini API)
- Ping-pong infini en direct entre :
  - **Astériclos (L'Aristotélico-Thomiste) :** Ancré dans le réel sensible (*adaequatio intellectus et rei*), la matière, la forme et le bon sens paysan gaulois.
  - **Obélicon (Le Rationaliste Cartésien) :** Doute méthodique, malin génie, *Cogito ergo sum*, distinction stricte de l'âme (*res cogitans*) et de la pâte modelée (*res extensa*).
- Zéro texte préenregistré : connexion directe à l'API Gemini (`gemini-2.5-flash-lite`, 90 tokens max).
- Bulles de BD dynamiques au-dessus des personnages et bouton d'interruption immédiate ("Arrêter la dispute").

### 2. ⚽ Mini-Foot en Pâte à Modeler (Physique Cannon-es)
- Ballon en pâte bicolore avec frottement de roulement réaliste et rebonds amortis.
- Tirs et passes dynamiques par clic/toucher ou frappes au pied.
- IA d'orientation et de frappe des personnages.
- Détection des buts dans les cages en bois, célébrations d'euphorie et réengagement au centre.

### 3. 🕯️ Prière Traditionnelle Tridentine (Messe en Latin)
- Autel avec nappe blanche, crucifix sculpté et 6 bougies allumées avec flammes vacillantes et volutes de fumée d'encens.
- Personnages tournés vers l'Orient (*ad orientem*), agenouillements dévots, tête inclinée et battements de coulpe au *Confiteor*.

### 4. ☀️ Louange Charismatique (Communauté de l'Emmanuel)
- Ambiance chaleureuse, rayons de soleil volumétriques dorés et guitare gauloise en argile.
- Bras levés au ciel en orante, balancements rythmés et battements de mains synchronisés.

---

## 🚀 Installation & Lancement Local

```bash
# Cloner le dépôt
git clone https://github.com/Josephdecacqueray/pate-a-modeler-3d.git
cd pate-a-modeler-3d

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

L'application s'ouvre sur `http://localhost:5173/`.

---

## 📸 Audit Visuel Puppeteer

Le projet inclut une suite de tests et de captures automatisées avec Puppeteer (`scripts/capture_audit.js`) permettant de valider les rendus en haute résolution Desktop (1920x1080) et Mobile (390x844).

Pour relancer l'audit visuel :
```bash
node scripts/capture_audit.js
```

---

## 📄 Licence
Licence MIT - 2026.

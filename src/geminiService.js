// Client Gemini direct économe en quota et 100% fonctionnel
import { CONFIG } from './config.js';

class GeminiService {
  constructor() {
    this.config = CONFIG;
    // Migration transparente du modèle 2.5 déprécié vers 3.5 pour garantir zéro 404 en console
    this.activeModel = (this.config.MODEL === 'gemini-2.5-flash-lite') ? 'gemini-3.5-flash-lite' : this.config.MODEL;
  }

  get apiKey() {
    return this.getApiKey();
  }

  getApiKey() {
    // 1. Clé dans localStorage si modifiée par l'utilisateur
    try {
      const local = localStorage.getItem('gemini_api_key');
      if (local && local.trim().length > 10) return local.trim();
    } catch (e) {}

    // 2. Clé officielle en dur dans CONFIG
    return this.config.API_KEY;
  }

  setApiKey(key) {
    if (key && key.trim().length > 10) {
      try { localStorage.setItem('gemini_api_key', key.trim()); } catch (e) {}
    } else {
      try { localStorage.removeItem('gemini_api_key'); } catch (e) {}
    }
  }

  hasApiKey() {
    return !!this.getApiKey();
  }

  getStatus() {
    const key = this.getApiKey();
    if (key) {
      return {
        online: true,
        model: this.activeModel,
        label: `Connecté (${this.activeModel})`
      };
    }
    return {
      online: false,
      model: 'En attente de clé',
      label: 'Clé requise (cliquez sur 🔑)'
    };
  }

  /**
   * Requête directe via fetch POST vers l'endpoint officiel
   */
  async _callGemini(prompt, model = this.activeModel) {
    const apiKey = this.getApiKey();
    if (!apiKey) {
      throw new Error("Clé API Gemini non configurée.");
    }

    const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;

    const payload = {
      contents: [{ role: 'user', parts: [{ text: prompt }] }],
      generationConfig: {
        maxOutputTokens: this.config.MAX_TOKENS || 85,
        temperature: 0.7
      }
    };

    let response;
    let lastErr;

    for (let attempt = 0; attempt < 3; attempt++) {
      try {
        response = await fetch(url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });
        if (response && response.ok) break;
      } catch (netErr) {
        lastErr = netErr;
        if (attempt < 2) {
          await new Promise(r => setTimeout(r, 600 * (attempt + 1)));
        }
      }
    }

    if (!response) {
      throw new Error(`Erreur réseau Gemini: ${lastErr?.message || 'Connexion impossible'}`);
    }

    if (!response.ok) {
      const errText = await response.text();
      let errorMsg = `HTTP ${response.status}`;
      try {
        const parsed = JSON.parse(errText);
        if (parsed.error && parsed.error.message) {
          errorMsg = parsed.error.message;
        }
      } catch (e) {}

      // Repli d'urgence sur gemini-flash-lite-latest si nécessaire
      if (model !== 'gemini-flash-lite-latest') {
        this.activeModel = 'gemini-flash-lite-latest';
        return await this._callGemini(prompt, 'gemini-flash-lite-latest');
      }

      throw new Error(`[Gemini API ${response.status}] ${errorMsg}`);
    }

    const data = await response.json();
    const candidateText = data?.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!candidateText || candidateText.trim() === '') {
      throw new Error("Réponse vide reçue de l'API Gemini.");
    }

    return candidateText.trim().replace(/^["']|["']$/g, '');
  }

  /**
   * Mode 1 : Débat Philosophique infini (Aristotélico-Thomiste vs Rationaliste Cartésien)
   * Aucune 3e IA modératrice : le code client orchestre le ping-pong continu
   */
  async generateTurn(speakerId, topic, history = []) {
    const historyFormatted = history.slice(-4).map(h => 
      `${h.speaker === 'A' ? 'Astériclos (Thomiste)' : 'Obélicon (Cartésien)'} : "${h.text}"`
    ).join('\n');

    let prompt = '';

    if (speakerId === 'A') {
      prompt = `Tu incarnes "Astériclos", bonhomme gaulois en pâte à modeler et philosophe ARISTOTÉLICO-THOMISTE / RÉALISTE passionné.
Tes principes :
1. La vérité est l'adéquation de l'intellect à la chose réelle (adaequatio intellectus et rei).
2. Pars toujours de l'observation concrète, de la matière sensible, du sanglier qui cuit, de ce que tes yeux et tes doigts d'argile touchent.
3. Réfute le doute excessif par le bon sens paysan gaulois.
Sujet du débat : « ${topic} ».
${historyFormatted ? `Derniers échanges :\n${historyFormatted}\n` : ''}
Consigne stricte : Réponds en UNE seule phrase percutante (style BD Astérix, max 25 mots). Parle avec franchise, vigueur gauloise et réalisme philosophique.`;
    } else {
      prompt = `Tu incarnes "Obélicon", bonhomme gaulois colossal en pâte à modeler et philosophe CARTÉSIEN / RATIONALISTE obstiné.
Tes principes :
1. Doute méthodique absolu : les sens peuvent nous tromper, le malin génie pourrait tout illusionner.
2. Seule la pensée pure prouve l'existence : "Cogito, ergo sum" (Je pense, donc je suis).
3. Remets en question la réalité de ton corps d'argile ou des menhirs : sont-ils de la res extensa illusoire ?
Sujet du débat : « ${topic} ».
${historyFormatted ? `Derniers échanges :\n${historyFormatted}\n` : ''}
Consigne stricte : Réponds en UNE seule phrase percutante (style BD Astérix, max 25 mots). Sois naïf mais redoutablement logique dans ton doute cartésien.`;
    }

    return await this._callGemini(prompt);
  }

  /**
   * Mode 2 : Réaction Mini-Football physique
   */
  async generateSoccerReaction(eventDesc, playerName) {
    const prompt = `Contexte : Mini-match de foot gaulois en pâte à modeler.
Événement : ${eventDesc} par ${playerName}.
Consigne : Rédige une exclamation hilarante et courte de supporter gaulois (max 15 mots, ambiance BD).`;
    return await this._callGemini(prompt);
  }

  /**
   * Modes 3 & 4 : Prière Tridentine et Emmanuel
   */
  async generatePrayerText(mode, charName) {
    if (mode === 'tridentine') {
      const prompt = `Contexte : Messe tridentine traditionnelle ad orientem dans un village gaulois d'argile.
Personnage : ${charName}.
Consigne : Écris une courte phrase solennelle en latin ecclésiastique suivie de sa traduction française méditative (ex: "Introibo ad altare Dei..."). Max 20 mots.`;
      return await this._callGemini(prompt);
    } else {
      const prompt = `Contexte : Louange joyeuse du Renouveau Charismatique (Communauté de l'Emmanuel) au soleil.
Personnage : ${charName}.
Consigne : Écris une courte exclamation d'action de grâce joyeuse et fraternelle (style "Il est vivant !", max 18 mots).`;
      return await this._callGemini(prompt);
    }
  }
}

export const geminiService = new GeminiService();

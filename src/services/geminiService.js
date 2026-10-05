// Moteur d'IA 100% réel via API Gemini (Zéro texte préenregistré)

const STORAGE_KEY = 'gemini_api_key';
const PRIMARY_MODEL = 'gemini-2.5-flash-lite';
const FALLBACK_MODELS = ['gemini-1.5-flash', 'gemini-2.0-flash-lite'];

export class GeminiService {
  constructor() {
    this.apiKey = this._discoverApiKey();
  }

  _discoverApiKey() {
    // 1. Clé déjà saisie par l'utilisateur et persistée dans localStorage
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && saved.trim().length > 8) return saved.trim();

    // 2. Variable d'environnement Vite (.env)
    const viteKey = import.meta.env ? (import.meta.env.VITE_GEMINI_API_KEY || import.meta.env.VITE_GOOGLE_API_KEY) : null;
    if (viteKey && viteKey.trim().length > 8) return viteKey.trim();

    return null;
  }

  setApiKey(key) {
    if (key && key.trim().length > 8) {
      this.apiKey = key.trim();
      localStorage.setItem(STORAGE_KEY, this.apiKey);
    } else {
      this.apiKey = null;
      localStorage.removeItem(STORAGE_KEY);
    }
  }

  hasApiKey() {
    return !!this.apiKey;
  }

  getStatus() {
    if (this.apiKey) {
      return {
        online: true,
        model: PRIMARY_MODEL,
        label: `Connecté (${PRIMARY_MODEL})`
      };
    }
    return {
      online: false,
      model: 'En attente de clé',
      label: 'Clé Gemini requise (cliquez sur 🔑)'
    };
  }

  /**
   * Génère une réplique en direct pour un personnage selon son profil philosophique
   * @param {'A' | 'B'} speakerId - 'A' (Aristotélico-Thomiste) ou 'B' (Cartésien)
   * @param {string} topic - Sujet du débat
   * @param {Array<{speaker: string, text: string}>} history - Historique de la conversation
   */
  async generateTurn(speakerId, topic, history = []) {
    if (!this.apiKey) {
      throw new Error("AUCUNE_CLE_API: Veuillez renseigner votre clé API Google Gemini en cliquant sur le bouton 🔑.");
    }

    const historyFormatted = history.slice(-4).map(h => 
      `${h.speaker === 'A' ? 'Astériclos (Réaliste)' : 'Obélicon (Cartésien)'} : "${h.text}"`
    ).join('\n');

    let prompt = '';

    if (speakerId === 'A') {
      prompt = `Tu incarnes "Astériclos", bonhomme gaulois en pâte à modeler et philosophe ARISTOTÉLICO-THOMISTE / RÉALISTE pur sucre.
Tes principes fondamentaux :
1. La vérité est l'adéquation de l'esprit à la chose réelle (adaequatio intellectus et rei).
2. Tu t'appuies sur le réel sensible : ce que tes yeux d'argile voient, ce que tes mains en pâte pétrissent (matière, forme substantielle, finalité naturelle, le bon sens paysan gaulois, le poids du menhir et la saveur du sanglier rôti).
3. Tu rejettes le doute stérile : "Rien n'est dans l'intellect qui n'ait d'abord été dans les sens" !

Ton interlocuteur est "Obélicon", un Cartésien obsédé par le doute méthodique et le malin génie.
Sujet du débat philosophique : "${topic}"

${historyFormatted ? `Historique récent du débat :\n${historyFormatted}\n` : 'Tu lances le débat.'}

Consignes strictes :
- Réponds avec vivacité gauloise et rigueur philosophique réaliste.
- Longueur STRICTE : 2 à 3 phrases courtes (35 mots maximum).
- Écris UNIQUEMENT ta réplique, sans préfixe de nom ni guillemets.`;
    } else {
      prompt = `Tu incarnes "Obélicon", bonhomme gaulois en pâte à modeler et philosophe CARTÉSIEN / RATIONALISTE intransigeant.
Tes principes fondamentaux :
1. Tu doutes méthodiquement de tout ce qui vient des sens trompeurs : tes yeux en bille d'argile, le décor, et même la réalité matérielle de ton corps en plasticine !
2. Tu invoques le doute radical, le Malin Génie qui pourrait manipuler la pâte, la certitude absolue du Cogito ("Je pense, donc je suis"), et la séparation nette entre l'âme pensante (res cogitans) et la pâte étendue (res extensa).
3. Tu cherches uniquement la clarté et la distinction géométrique des idées.

Ton interlocuteur est "Astériclos", un réaliste naïf qui croit bêtement à ce qu'il touche.
Sujet du débat philosophique : "${topic}"

${historyFormatted ? `Historique récent du débat :\n${historyFormatted}\n` : ''}

Consignes strictes :
- Réfute la dernière affirmation d'Astériclos par le doute méthodique ou l'évidence du Cogito.
- Longueur STRICTE : 2 à 3 phrases courtes (35 mots maximum).
- Écris UNIQUEMENT ta réplique, sans préfixe de nom ni guillemets.`;
    }

    try {
      return await this._callGemini(prompt, PRIMARY_MODEL);
    } catch (err) {
      console.warn(`Erreur avec ${PRIMARY_MODEL}, tentative sur modèle de repli...`, err);
      for (const fallback of FALLBACK_MODELS) {
        try {
          return await this._callGemini(prompt, fallback);
        } catch (fbErr) {
          console.warn(`Erreur repli ${fallback}:`, fbErr);
        }
      }
      throw err; // Propage l'erreur réelle (quota, réseau, auth)
    }
  }

  async _callGemini(prompt, model) {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${this.apiKey}`;
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: {
          temperature: 0.82,
          maxOutputTokens: 90
        }
      })
    });

    if (!response.ok) {
      const errBody = await response.text();
      let msg = `Erreur API Gemini (${response.status})`;
      try {
        const parsed = JSON.parse(errBody);
        if (parsed.error && parsed.error.message) {
          msg = parsed.error.message;
        }
      } catch (e) {}
      throw new Error(msg);
    }

    const data = await response.json();
    const candidateText = data?.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!candidateText || candidateText.trim() === '') {
      throw new Error("Réponse vide reçue de l'API Gemini.");
    }

    return candidateText.trim().replace(/^["']|["']$/g, '');
  }
}

export const geminiService = new GeminiService();

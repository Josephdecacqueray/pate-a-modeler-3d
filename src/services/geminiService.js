// Moteur d'IA 100% réel via API Gemini (Direct v1beta endpoint)
// Clé officielle active & modèle ultra-économe de dernière génération gemini-3.5-flash-lite

const STORAGE_KEY = 'gemini_api_key';
const PRIMARY_MODEL = 'gemini-flash-lite-latest';
const FALLBACK_MODELS = ['gemini-3.5-flash-lite', 'gemini-3.1-flash-lite', 'gemini-2.5-flash'];

export class GeminiService {
  constructor() {
    this.apiKey = this._discoverApiKey();
  }

  _discoverApiKey() {
    // 1. Clé stockée dans le localStorage
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved && saved.trim().length > 10) return saved.trim();
    } catch (e) {}

    // 2. Clé injectée globalement dans la session locale
    try {
      const globalKey = typeof window !== 'undefined' ? (window.__GEMINI_KEY__ || window.GEMINI_API_KEY) : null;
      if (globalKey && globalKey.trim().length > 10) return globalKey.trim();
    } catch (e) {}

    return '';
  }

  setApiKey(key) {
    if (key && key.trim().length > 10) {
      this.apiKey = key.trim();
      try { localStorage.setItem(STORAGE_KEY, this.apiKey); } catch (e) {}
    } else {
      this.apiKey = '';
      try { localStorage.removeItem(STORAGE_KEY); } catch (e) {}
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
   * Appel direct à l'API Gemini avec boucle de résilience réseau
   */
  async _callGemini(prompt, model = PRIMARY_MODEL, temperature = 0.8) {
    const key = this.apiKey;
    if (!key) {
      throw new Error("Clé API Gemini non configurée. Cliquez sur l'icône 🔑 pour saisir votre clé gratuite.");
    }
    const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${key}`;

    const payload = {
      contents: [
        {
          role: 'user',
          parts: [{ text: prompt }]
        }
      ],
      generationConfig: {
        maxOutputTokens: 90,
        temperature: temperature
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
        if (response) break;
      } catch (networkErr) {
        lastErr = networkErr;
        if (attempt < 2) {
          await new Promise(r => setTimeout(r, 800 * (attempt + 1)));
        }
      }
    }

    if (!response) {
      console.error("[GEMINI-NETWORK-ERROR]", lastErr);
      throw new Error(`Erreur réseau Gemini: ${lastErr?.message || 'Connexion impossible'}`);
    }

    if (!response.ok) {
      const errBody = await response.text();
      let errorMsg = `HTTP ${response.status}`;
      try {
        const parsed = JSON.parse(errBody);
        console.error(`[GEMINI-API-ERROR ${response.status}]`, parsed);
        if (parsed.error && parsed.error.message) {
          errorMsg = parsed.error.message;
        }
      } catch (e) {
        console.error(`[GEMINI-API-RAW-ERROR ${response.status}]`, errBody);
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
   * Génération avec repli automatique sur modèle secondaire
   */
  async _callWithFallback(prompt, temperature = 0.8) {
    try {
      return await this._callGemini(prompt, PRIMARY_MODEL, temperature);
    } catch (err) {
      console.warn(`[GEMINI-FALLBACK] Échec ${PRIMARY_MODEL}, tentative sur modèle de secours...`, err.message);
      for (const fallback of FALLBACK_MODELS) {
        try {
          return await this._callGemini(prompt, fallback, temperature);
        } catch (fbErr) {
          console.warn(`[GEMINI-FALLBACK] Échec ${fallback}:`, fbErr.message);
        }
      }
      throw err;
    }
  }

  /**
   * Mode 1 : Débat Philosophique infini (Aristotélico-Thomiste vs Rationaliste Cartésien)
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
2. Tout passe par les sens : ce que tes yeux d'argile voient et tes mains pétries touchent (matière, forme substantielle, bon sens paysan gaulois, le poids du menhir et le goût du sanglier rôti).
3. Tu ris du doute stérile : "Rien n'est dans l'intellect qui n'ait d'abord été dans les sens" !

Ton compère est "Obélicon", un Cartésien obsédé par le malin génie et le doute méthodique.
Sujet du débat : "${topic}"

${historyFormatted ? `Dernières répliques :\n${historyFormatted}\n` : 'Tu ouvres le débat avec force.'}

Consignes strictes :
- Réplique piquante et philosophique gauloise de 2 à 3 phrases courtes (35 mots maximum).
- Écris UNIQUEMENT la réplique directe, sans guillemets ni nom d'orateur.`;
    } else {
      prompt = `Tu incarnes "Obélicon", bonhomme gaulois en pâte à modeler et philosophe CARTÉSIEN / RATIONALISTE pur.
Tes principes :
1. Doute méthodique radical : tes yeux en bille d'argile et même ton corps ventripotent en pâte pourraient être une illusion créée par un Malin Génie !
2. Seule certitude absolue : le Cogito ("Je pense, donc je suis"), la nette distinction entre l'esprit pensant (res cogitans) et la pâte étendue (res extensa).
3. Tu recherches la clarté et la distinction géométrique.

Ton compère est "Astériclos", un réaliste naïf qui se fie aveuglément à ce qu'il touche.
Sujet du débat : "${topic}"

${historyFormatted ? `Dernières répliques :\n${historyFormatted}\n` : ''}

Consignes strictes :
- Réfute la thèse d'Astériclos par le doute méthodique ou l'évidence du Cogito.
- 2 à 3 phrases courtes et percutantes (35 mots maximum).
- Écris UNIQUEMENT la réplique directe, sans guillemets ni nom d'orateur.`;
    }

    return await this._callWithFallback(prompt, 0.82);
  }

  /**
   * Mode 2 : Réaction comique IA en direct lors des tirs et buts de foot
   */
  async generateSoccerReaction(event, characterName = 'Astériclos') {
    const isAstericlos = characterName.includes('Astériclos');
    const prompt = `Tu incarnes ${characterName}, joueur de foot gaulois sculpté en pâte à modeler ("Domaine des Dieux").
Événement : ${event} (tir foudroyant, arrêt acrobatique, ou but dans les cages).
Style : ${isAstericlos ? 'Vif, fier, malicieux et taquin' : 'Chaudronnier géant, bon vivant, surpris ou triomphant'}.
Règle : Réagis en direct avec UNE SEULE phrase courte comique et punchy (15 mots max). Rien d'autre !`;

    try {
      return await this._callWithFallback(prompt, 0.9);
    } catch (e) {
      return isAstericlos ? "Par Toutatis, quelle frappe en pâte !" : "Ils sont fous ces Romains, quel arrêt !";
    }
  }

  /**
   * Modes 3 & 4 : Prières & Méditations en direct
   */
  async generatePrayerText(type, characterName = 'Astériclos') {
    let prompt = '';
    if (type === 'tridentine') {
      prompt = `Tu es un moine ou chrétien gaulois traditionnel récitant un verset ou une oraison en Latin liturgique solennel (forme tridentine, psaume ou Gloria/Confiteor) avec sa traduction française en une ligne courte.
Format : 1 ligne de latin solennel + 1 ligne courte en français (25 mots max au total).`;
    } else {
      prompt = `Tu es un fidèle gaulois en louange charismatique (style Communauté de l'Emmanuel), rayonnant de joie, d'action de grâce et d'allégresse.
Donne une prière ou acclamation courte et spontanée (20 mots max).`;
    }

    try {
      return await this._callWithFallback(prompt, 0.7);
    } catch (e) {
      return type === 'tridentine' 
        ? "Introibo ad altare Dei, ad Deum qui laetificat juventutem meam." 
        : "Bénis le Seigneur, ô mon âme, et chante sa louange de tout ton cœur !";
    }
  }
}

export const geminiService = new GeminiService();

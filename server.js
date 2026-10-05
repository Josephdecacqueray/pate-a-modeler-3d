import { createServer } from 'vite';

async function start() {
  try {
    const server = await createServer({
      configFile: './vite.config.js',
      server: {
        port: 5173,
        host: '0.0.0.0'
      }
    });

    await server.listen();
    console.log(`[PATE-A-MODELER] Serveur Vite actif sur http://localhost:5173`);
    server.printUrls();
  } catch (err) {
    console.error('[PATE-A-MODELER] Erreur démarrage serveur:', err);
    process.exit(1);
  }
}

start();

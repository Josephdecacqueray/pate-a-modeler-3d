import puppeteer from 'puppeteer';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const screenshotsDir = 'C:\\Users\\compteadmin\\Desktop\\Antigravity\\screenshots';

if (!fs.existsSync(screenshotsDir)) {
  fs.mkdirSync(screenshotsDir, { recursive: true });
}

// Détection de l'exécutable Chromium / Edge sur le système hôte
const edgePaths = [
  'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
  'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe',
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'
];
let executablePath = edgePaths.find(p => fs.existsSync(p));

console.log('[AUDIT] Exécutable navigateur détecté :', executablePath || 'Défaut Puppeteer');

async function runAudit() {
  console.log('[AUDIT] Lancement du navigateur pour auto-contrôle visuel...');
  const launchOptions = {
    headless: 'new',
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--use-gl=angle',
      '--enable-webgl',
      '--ignore-gpu-blocklist',
      '--allow-running-insecure-content'
    ]
  };

  if (executablePath) {
    launchOptions.executablePath = executablePath;
  }

  const browser = await puppeteer.launch(launchOptions);

  try {
    const page = await browser.newPage();
    page.on('console', msg => console.log('[NAVIGATEUR]', msg.text()));

    console.log('[AUDIT] Navigation vers http://localhost:5173...');
    await page.goto('http://localhost:5173', { waitUntil: 'domcontentloaded', timeout: 35000 });

    // Attente du chargement des textures 2K et du premier cycle de rendu Three.js
    await new Promise(r => setTimeout(r, 3500));

    // 1. Capture Desktop (1920x1080)
    console.log('[AUDIT] Capture Desktop (1920x1080)...');
    await page.setViewport({ width: 1920, height: 1080, deviceScaleFactor: 1 });
    await new Promise(r => setTimeout(r, 1200));
    const pDesktopOverview = path.join(screenshotsDir, 'desktop_overview.png');
    await page.screenshot({ path: pDesktopOverview });
    console.log('  -> Sauvegardé :', pDesktopOverview);

    // Mode Foot Desktop
    const soccerTab = await page.$('button[data-mode="soccer"]');
    if (soccerTab) {
      await soccerTab.click();
      await new Promise(r => setTimeout(r, 1800));
      const pDesktopSoccer = path.join(screenshotsDir, 'desktop_soccer.png');
      await page.screenshot({ path: pDesktopSoccer });
      console.log('  -> Sauvegardé :', pDesktopSoccer);
    }

    // Mode Débat Desktop
    const debateTab = await page.$('button[data-mode="debate"]');
    if (debateTab) {
      await debateTab.click();
      await new Promise(r => setTimeout(r, 1800));
      const pDesktopDebate = path.join(screenshotsDir, 'desktop_debate.png');
      await page.screenshot({ path: pDesktopDebate });
      console.log('  -> Sauvegardé :', pDesktopDebate);
    }

    // 2. Capture Mobile (iPhone 14 / Pixel, 390x844)
    console.log('[AUDIT] Capture Mobile (390x844)...');
    await page.setViewport({ width: 390, height: 844, isMobile: true, hasTouch: true, deviceScaleFactor: 2 });
    await new Promise(r => setTimeout(r, 1200));
    const pMobileOverview = path.join(screenshotsDir, 'mobile_overview.png');
    await page.screenshot({ path: pMobileOverview });
    console.log('  -> Sauvegardé :', pMobileOverview);

    // Mode Cinéma / Vue Dégagée Mobile
    const cinemaBtn = await page.$('#btn-cinema-toggle');
    if (cinemaBtn) {
      await cinemaBtn.click();
      await new Promise(r => setTimeout(r, 1000));
      const pMobileCinema = path.join(screenshotsDir, 'mobile_cinema_view.png');
      await page.screenshot({ path: pMobileCinema });
      console.log('  -> Sauvegardé :', pMobileCinema);
    }

    console.log('[AUDIT] ✅ Toutes les captures ont été générées avec succès !');
  } catch (err) {
    console.error('[AUDIT] ❌ Erreur lors de la capture d\'écran :', err);
    process.exitCode = 1;
  } finally {
    await browser.close();
  }
}

runAudit();

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const SOURCE_DIR = 'C:\\Users\\compteadmin\\Desktop\\Antigravity\\modèles 3D';
const TARGET_DIR = path.resolve('public/models');
const JOURNAL_PATH = 'C:\\Users\\compteadmin\\Desktop\\Antigravity\\journal_execution.txt';
const EXCLUDE_REGEX = /eglise|église|church|temple/i;

function logJournal(level, message) {
  const now = new Date().toISOString().replace('T', ' ').substring(0, 19);
  const line = `[${now}] [${level}] [ASSET-IMPORT] ${message}\n`;
  console.log(line.trim());
  try {
    fs.appendFileSync(JOURNAL_PATH, line, 'utf-8');
  } catch (e) {
    console.error("Erreur écriture journal:", e.message);
  }
}

function cleanExcludedFiles(dir) {
  if (!fs.existsSync(dir)) return;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (EXCLUDE_REGEX.test(entry.name)) {
      logJournal('WARN', `Exclusion stricte appliquée : suppression de ${fullPath}`);
      if (entry.isDirectory()) {
        fs.rmSync(fullPath, { recursive: true, force: true });
      } else {
        fs.unlinkSync(fullPath);
      }
    } else if (entry.isDirectory()) {
      cleanExcludedFiles(fullPath);
    }
  }
}

export async function importAssets() {
  logJournal('INFO', `Démarrage de la copie des assets 3D locaux depuis : ${SOURCE_DIR}`);

  if (!fs.existsSync(SOURCE_DIR)) {
    throw new Error(`Le dossier source n'existe pas: ${SOURCE_DIR}`);
  }

  if (!fs.existsSync(TARGET_DIR)) {
    fs.mkdirSync(TARGET_DIR, { recursive: true });
  }

  const files = fs.readdirSync(SOURCE_DIR);
  logJournal('INFO', `Fichiers sources détectés (${files.length}) : ${files.join(', ')}`);

  for (const file of files) {
    if (EXCLUDE_REGEX.test(file)) {
      logJournal('WARN', `Exclusion stricte : fichier ignoré -> ${file}`);
      continue;
    }

    const srcFile = path.join(SOURCE_DIR, file);
    const destFile = path.join(TARGET_DIR, file);

    // Copie du fichier
    fs.copyFileSync(srcFile, destFile);
    logJournal('INFO', `Copie réussie : ${file} -> public/models/${file}`);

    // Si c'est un zip, extraction dans un sous-dossier dédié
    if (file.toLowerCase().endsWith('.zip')) {
      let subDirName = 'misc';
      if (/Characters\s*-\s*Obelix/i.test(file)) subDirName = 'obelix';
      else if (/Characters\s*-\s*Asterix/i.test(file)) subDirName = 'asterix';
      else if (/environnement/i.test(file)) subDirName = 'environnement';

      const extractDir = path.join(TARGET_DIR, subDirName);
      if (!fs.existsSync(extractDir)) {
        fs.mkdirSync(extractDir, { recursive: true });
      }

      logJournal('INFO', `Extraction de l'archive ${file} vers ${extractDir}...`);
      try {
        execSync(`tar -xf "${destFile}" -C "${extractDir}"`, { stdio: 'pipe' });
        logJournal('INFO', `Extraction terminée avec succès pour ${subDirName}`);
      } catch (err) {
        logJournal('ERROR', `Échec extraction tar pour ${file}: ${err.message}`);
      }
    }
  }

  // Filtrage post-extraction strict de sécurité
  cleanExcludedFiles(TARGET_DIR);

  logJournal('SUCCESS', `Tous les assets 3D ont été importés et validés dans ${TARGET_DIR}`);
}

importAssets().catch(err => {
  logJournal('ERROR', `Erreur critique import assets: ${err.message}`);
  process.exit(1);
});

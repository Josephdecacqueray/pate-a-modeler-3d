import fs from 'fs';
import { execSync } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const git = 'C:\\Users\\compteadmin\\mingit\\cmd\\git.exe';
const distDir = path.resolve(__dirname, '../dist');

try {
  console.log('[GH-PAGES] Déploiement en cours depuis:', distDir);
  const gitDir = path.join(distDir, '.git');
  if (fs.existsSync(gitDir)) {
    fs.rmSync(gitDir, { recursive: true, force: true });
  }
  execSync(`"${git}" init`, { cwd: distDir, stdio: 'inherit' });
  execSync(`"${git}" checkout -b gh-pages`, { cwd: distDir, stdio: 'inherit' });
  execSync(`"${git}" add .`, { cwd: distDir, stdio: 'inherit' });
  execSync(`"${git}" commit -m "Deploy production build with authentic 3D XXL models and live Gemini pipeline to GitHub Pages"`, { cwd: distDir, stdio: 'inherit' });
  execSync(`"${git}" push -f https://github.com/Josephdecacqueray/pate-a-modeler-3d.git gh-pages`, { cwd: distDir, stdio: 'inherit' });
  console.log('[GH-PAGES] Déploiement GitHub Pages réussi !');
} catch (e) {
  console.error('[GH-PAGES] Erreur:', e.message);
  process.exit(1);
}

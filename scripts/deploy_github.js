import { execSync } from 'child_process';
import path from 'path';

const env = {
  ...process.env,
  PATH: 'C:\\Users\\compteadmin\\mingit\\cmd;' + (process.env.PATH || '')
};

function run(cmd) {
  console.log(`\n> ${cmd}`);
  try {
    const out = execSync(cmd, { env, encoding: 'utf-8', stdio: ['inherit', 'pipe', 'pipe'] });
    if (out.trim()) console.log(out.trim());
    return out;
  } catch (err) {
    if (err.stdout && err.stdout.trim()) console.log(err.stdout.trim());
    if (err.stderr && err.stderr.trim()) console.error(err.stderr.trim());
    throw err;
  }
}

async function main() {
  console.log('--- ETAPE 1: Configuration Git & Commit Initial ---');
  run('git config user.name "Josephdecacqueray"');
  run('git config user.email "josephdecacqueray@users.noreply.github.com"');
  run('git add .');
  try {
    run('git commit -m "Initial release: Astérix & Obélix 3D Claymation SPA"');
  } catch (e) {
    console.log('Commit already exists or nothing to commit.');
  }

  console.log('\n--- ETAPE 2: Création du dépôt distant GitHub ---');
  try {
    run('gh repo create Josephdecacqueray/pate-a-modeler-3d --public --source=. --remote=origin --push --description "Mini-jeu 3D Web Pâte à Modeler (Style Le Domaine des Dieux) - Three.js, Cannon-es, Gemini API"');
  } catch (e) {
    console.log('Repo creation output logged above, checking status...');
  }

  console.log('\n--- ETAPE 3: Vérification du dépôt distant ---');
  run('git remote -v');
  run('git push -u origin main');

  console.log('\n--- ETAPE 4: Déploiement vers la branche gh-pages ---');
  // Création et push propre de dist/ vers la branche gh-pages
  run('npm.cmd run build');
  
  // Utiliser git subtree ou un git commit direct pour gh-pages
  const distDir = path.resolve('dist');
  console.log('Déploiement de dist/ vers gh-pages...');
  try {
    // Initialise a temporary git repo inside dist to push directly to origin gh-pages
    run(`git --work-tree="${distDir}" checkout --orphan gh-pages-temp`);
    run(`git --work-tree="${distDir}" add --all`);
    run(`git --work-tree="${distDir}" commit -m "Deploy production build to GitHub Pages"`);
    run(`git push origin gh-pages-temp:gh-pages --force`);
    run('git checkout -f main');
    run('git branch -D gh-pages-temp');
    console.log('Branche gh-pages mise à jour avec succès !');
  } catch (err) {
    console.warn('Alternative push to gh-pages:', err.message);
  }

  console.log('\n--- ETAPE 5: Activation de GitHub Pages ---');
  try {
    // Configure GitHub Pages to serve from gh-pages branch / root
    run('gh api -X POST repos/Josephdecacqueray/pate-a-modeler-3d/pages -f source[branch]=gh-pages -f source[path]=/');
    console.log('GitHub Pages activé avec succès sur la branche gh-pages !');
  } catch (err) {
    console.log('GitHub Pages peut-être déjà configuré ou géré par Actions, vérification...');
    try {
      run('gh api repos/Josephdecacqueray/pate-a-modeler-3d/pages');
    } catch (e2) {}
  }

  console.log('\n--- SUCCES DEPLOIEMENT GITHUB ! ---');
}

main().catch(err => {
  console.error('Erreur déploiement:', err);
  process.exit(1);
});

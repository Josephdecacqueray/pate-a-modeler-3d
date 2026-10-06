import fs from 'fs';
import path from 'path';

const JOURNAL_PATH = 'C:\\Users\\compteadmin\\Desktop\\Antigravity\\journal_execution.txt';

export function logJournal(level, module, message) {
  const now = new Date().toISOString().replace('T', ' ').substring(0, 19);
  const line = `[${now}] [${level}] [${module}] ${message}\n`;
  console.log(line.trim());
  try {
    fs.appendFileSync(JOURNAL_PATH, line, 'utf-8');
  } catch (e) {
    console.error('Erreur écriture journal:', e.message);
  }
}

if (process.argv[2] && process.argv[3] && process.argv[4]) {
  logJournal(process.argv[2], process.argv[3], process.argv[4]);
}

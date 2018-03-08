import * as fs from 'fs';
import * as path from 'path';
import * as mkdirp from 'mkdirp';

const DIR = path.join(__dirname, '../dist/config');
const ENVS = ['production', 'development'];

mkdirp.sync(DIR);

function escape(str) {
  if (typeof str !== 'string') {
    return str;
  }
  return str.replace(/[\/$'"]/g, '\\$&');
}

ENVS.forEach(env => {
  const { environment } = require(`../src/environments/environment.${env}.ts`);
  const output = Object.keys(environment)
    .map(key => `${key} ${JSON.stringify(escape(environment[key]))}`)
    .join('\n');
  fs.writeFileSync(path.join(DIR, `${env}.cfg`), `${output}\n`);
});

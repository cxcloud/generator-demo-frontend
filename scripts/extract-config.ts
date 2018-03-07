import * as fs from 'fs';
import * as path from 'path';

const ENVS = ['production', 'development'];

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
  fs.writeFileSync(path.join(__dirname, `${env}.cfg`), `${output}\n`);
});

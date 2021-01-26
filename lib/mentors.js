import fs from 'fs';
import yaml from 'js-yaml';

export function getAllMentors() {
  const path = `${process.cwd()}/mentors`;

  return fs
    .readdirSync(path, 'utf-8')
    .filter((f) => /\.ya?ml$/.test(f))
    .map((f) => fs.readFileSync(`${path}/${f}`))
    .map((f) => yaml.loadAll(f))
    .map((f) => (f.length === 1 ? f[0] : f));
}

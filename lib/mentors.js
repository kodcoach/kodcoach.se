import fs from 'fs';
import yaml from 'js-yaml';

export function getAllMentors() {
  const path = `${process.cwd()}/mentors`;
  const requiredKeys = ['name', 'description'];

  return fs
    .readdirSync(path, 'utf-8')
    .filter((f) => /\.ya?ml$/.test(f))
    .filter((f) => f !== 'example.yml')
    .map((f) => fs.readFileSync(`${path}/${f}`))
    .map((f) => yaml.loadAll(f))
    .map((f) => (f.length === 1 ? f[0] : null))
    .filter((f) => f)
    .filter((f) => {
      const keys = Object.keys(f);
      return requiredKeys.every((k) => keys.includes(k));
    });
}

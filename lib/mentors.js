import fs from 'fs';
import yaml from 'js-yaml';

const requiredKeys = ['name', 'description'];
const path = `${process.cwd()}/mentors`;
const yamlReg = /\.ya?ml$/;

function loadMentor(file) {
  const fileToRead = yamlReg.test(file)
    ? `${path}/${file}`
    : fs.existsSync(`${path}/${file}.yml`)
    ? `${path}/${file}.yml`
    : `${path}/${file}.yaml`;

  const mentor = [fs.readFileSync(fileToRead)]
    .map((f) => yaml.loadAll(f))
    .map((f) => (f.length === 1 ? f[0] : null))
    .filter((f) => {
      const keys = f ? Object.keys(f) : [];
      return requiredKeys.every((k) => keys.includes(k));
    })
    .filter((f) => f)
    .map((f) => ({ ...f, file, slug: file.replace(yamlReg, '') }));

  return mentor.length ? mentor[0] : null;
}

export function getMentor(id) {
  return loadMentor(id);
}

export function getAllMentors() {
  return fs
    .readdirSync(path, 'utf-8')
    .filter((f) => yamlReg.test(f))
    .filter((f) => f !== '_example.yml')
    .map((f) => loadMentor(f))
    .filter((f) => f);
}

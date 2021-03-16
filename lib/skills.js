import unique from 'array-unique';

// Skills that have alternate names, for searching
const MAPPED_SKILLS = [
  ["JS", "JavaScript", "ES6", 'ECMAScript', "Node"],
  ["Docker", "Container", "Containers"],
  ["AWS", "Amazon Web Services", "Cloud"],
  ["WordPress", "CMS"]
];

// Expand mentor skills into their alternative names
export const expandSkills = (skills) => {

  const mappedSkills = skills.map((skill) => {
    return MAPPED_SKILLS.map((mappedSkill) => mappedSkill.includes(skill) ? mappedSkill : [skill]).flat();
  });

  return unique.immutable(mappedSkills.flat());
};

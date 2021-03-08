export const flatten = (input) => {
  const stack = [...input];
  const res = [];
  while (stack.length) {
    const next = stack.pop();
    if (Array.isArray(next)) {
      stack.push(...next);
    } else {
      res.push(next);
    }
  }
  return res.reverse();
};

export const getNiceContactTitle = (type, name) => {
  const types = {
    website: `Besök ${name}s hemsida`,
    twitter: `Kontakta ${name} via Twitter`,
    github: `Kontakta ${name} via GitHub`,
    mail: `Kontakta ${name} via mail`,
  }

  return types[type] ? types[type] : '';
}

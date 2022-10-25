export default function sortProps(object, keys) {
  let sortKeys;
  if (keys) {
    sortKeys = keys;
  } else {
    sortKeys = [];
  }
  const propsSortedByKeys = [];
  const propsSortedByAlphabet = [];
  for (const prop in object) {
    if (!(sortKeys.indexOf(prop) === -1)) {
      propsSortedByKeys[sortKeys.indexOf(prop)] = { key: prop, value: object[prop] };
    } else {
      propsSortedByAlphabet.push({ key: prop, value: object[prop] });
    }
  }
  propsSortedByAlphabet.sort((a, b) => (a.key > b.key ? 1 : -1));
  return propsSortedByKeys.concat(propsSortedByAlphabet);
}

function isEqual(value, other) {
  if (value === other) {
    return true;
  }
  if (
    value === null ||
    other === null ||
    typeof value !== 'object' ||
    typeof value !== 'object'
  ) {
    return false;
  }
  if (Array.isArray(value) !== Array.isArray(other)) return false;
  const keys1 = Object.keys(value);
  const keys2 = Object.keys(other);
  if (keys1.length !== keys2.length) return false;
  for (let key of keys1) {
    if (!keys2.includes(keys1) || !isEqual(value[key], other[key])) {
      return false;
    }
  }
}

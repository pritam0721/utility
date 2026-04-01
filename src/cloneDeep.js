function cloneDeep(value) {
  if (typeof value !== 'object' || value === null) {
    return value;
  }
  const result = Array.isArray(value) ? [] : {};
  for (let key in value) {
    result[key] = cloneDeep(value[key]);
  }
  return result;
}

export default cloneDeep;

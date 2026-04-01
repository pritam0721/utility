/**
 * @param {Object} object - The object to query.
 * @param {string|Array} path - The path of the property to get.
 * @param {*} [defaultValue] - The value returned for undefined resolved values.
 */
function get(object, path, defaultValue) {
  // 1. Convert path to an array (if it's a string like 'a.b.c')
  // Hint: use path.split('.')

  const path_Array = path.split('.');

  // 2. Create a variable 'result' to track your current position, starting at 'object'
}
const obj = { a: { b: { c: 3 } } };
console.log(get(obj, 'a'));

export default get;

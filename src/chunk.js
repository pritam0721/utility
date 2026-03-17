/**
 * @param {Array} array - The array to process.
 * @param {number} [size=1] - The length of each chunk.
 * @returns {Array} - Returns the new array of chunks.
 */
function chunk(array, size = 1) {
  const result = [];
  if (!array || size < 1) return [];
  for (let i = 0; i < array.length; i += size) {
    let chunkedArray = array.slice(i, i + size);
    result.push(chunkedArray);
  }
  return result;
}
export default chunk;

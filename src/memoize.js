/**
 * @param {Function} func - The function to have its output memoized.
 * @returns {Function} - Returns the new memoized function.
 */
function memoize(func) {
  // 1. Create a "Cache" (A Map or a plain {} object)
  const cache = new Map();
  return function (...args) {
    // 2. Create a unique key based on the arguments
    // Hint: JSON.stringify(args) works well for this!
    const key = JSON.stringify(args);
    // 3. Check: Is the result already in the cache?
    if (cache.get(key)) {
      return cache.get(key);
    }
    // If yes, return it immediately!
    const result = func.apply(this, args);
    cache.set(key, result);
    // 4. If no: Run the original function, store the result in cache, then return it.
    return result;
  };
}

export default memoize;

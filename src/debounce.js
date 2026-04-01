/**
 * @param {Function} func - The function to debounce.
 * @param {number} wait - The number of milliseconds to delay.
 */
function debounce(func, wait) {
  let timeoutId;

  return function (...args) {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      return func.apply(this, args);
    }, wait);
  };
}

export default debounce;

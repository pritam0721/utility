function once(func) {
  let ran = false;
  let result;

  return function (...args) {
    if (!ran) {
      // 1. Mark as ran
      ran = true;
      // 2. Execute func with the arguments and store the result
      result = func.apply(this, args);
      // 3. Return the result
      return result;
    }
    // 4. On the second call, just return the stored result
    return result;
  };
}

export default once;

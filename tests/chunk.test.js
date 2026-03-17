import chunk from '../src/chunk.js';

const data = [1, 2, 3, 4, 5];

console.log(
  'Test 1 (Size 2):',
  JSON.stringify(chunk(data, 2)) === '[[1,2],[3,4],[5]]'
    ? '✅ Pass'
    : '❌ Fail',
);
console.log(
  'Test 2 (Size 3):',
  JSON.stringify(chunk(data, 3)) === '[[1,2,3],[4,5]]' ? '✅ Pass' : '❌ Fail',
);
console.log(
  'Test 3 (Empty):',
  chunk([], 2).length === 0 ? '✅ Pass' : '❌ Fail',
);

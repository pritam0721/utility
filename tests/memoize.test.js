import memoize from '../src/memoize.js';

// A "slow" function that simulates a heavy calculation (like a crypto trend analysis)
const heavyTask = (n) => {
  let iterations = 0;
  while (iterations < 1000000000) {
    iterations++;
  } // Artificial delay
  return n * 2;
};

const memoizedTask = memoize(heavyTask);

console.log('--- Starting memoize() Tests ---');

// First Call: This should be slow
console.time('First Call (Calculating)');
const res1 = memoizedTask(5);
console.timeEnd('First Call (Calculating)');
console.log(`Result: ${res1}`);

// Second Call: This should be nearly 0ms
console.time('Second Call (From Cache)');
const res2 = memoizedTask(5);
console.timeEnd('Second Call (From Cache)');
console.log(`Result: ${res2}`);

// Verification
if (res1 === res2) {
  console.log('\n✅ PASS: Results are consistent.');
} else {
  console.log('\n❌ FAIL: Results do not match.');
}

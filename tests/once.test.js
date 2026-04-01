import once from '../src/once.js';

// 1. Setup a "spy" variable to count how many times our function runs
let callCount = 0;

const payInvoice = (amount) => {
  callCount++;
  return `Paid $${amount}`;
};

// 2. Wrap our function in 'once'
const payOnce = once(payInvoice);

console.log('--- Starting once() Tests ---');

// First Call
const result1 = payOnce(100);
console.log(
  `Test 1 (First Call): ${result1 === 'Paid $100' ? '✅ Correct Result' : '❌ Wrong Result'}`,
);
console.log(
  `Test 1 (Execution): ${callCount === 1 ? '✅ Ran once' : '❌ Ran ' + callCount + ' times'}`,
);

// Second Call (with different arguments to see if it ignores them)
const result2 = payOnce(500);
console.log(
  `Test 2 (Second Call): ${result2 === 'Paid $100' ? '✅ Returned cached result' : '❌ Failed to cache'}`,
);
console.log(
  `Test 2 (Execution): ${callCount === 1 ? '✅ Did not run again' : '❌ Ran again!'}`,
);

// Third Call
payOnce(1000);
console.log(
  `Test 3 (Third Call): ${callCount === 1 ? '✅ Still only ran once' : '❌ Multiple executions detected'}`,
);

if (callCount === 1 && result1 === result2) {
  console.log('\n🚀 SUCCESS: Your once() implementation is bulletproof!');
} else {
  console.log('\n⚠️ FAILURE: Check your closure logic.');
}

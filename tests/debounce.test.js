import debounce from '../src/debounce.js';

let counter = 0;
const increment = () => {
  counter++;
  console.log(`Function executed! Counter is now: ${counter}`);
};

const debouncedIncrement = debounce(increment, 500);

console.log('--- Starting debounce() Tests ---');

// We call it 5 times rapidly.
// If debounce works, 'counter' should only be 1 at the end.
debouncedIncrement();
debouncedIncrement();
debouncedIncrement();
debouncedIncrement();
debouncedIncrement();

console.log('Called 5 times rapidly... waiting 500ms for execution.');

setTimeout(() => {
  if (counter === 1) {
    console.log('\n✅ PASS: Function fired exactly once after the silence.');
  } else {
    console.log(`\n❌ FAIL: Function fired ${counter} times.`);
  }
}, 1000); // Wait longer than the debounce time to check result

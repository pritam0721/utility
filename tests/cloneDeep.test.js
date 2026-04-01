import cloneDeep from '../src/cloneDeep.js';

const original = { a: 1, b: { c: 2 } };
const cloned = cloneDeep(original);

cloned.b.c = 99;

console.log('--- Starting cloneDeep() Tests ---');
console.log(`Original b.c: ${original.b.c}`); // Should still be 2
console.log(`Cloned b.c: ${cloned.b.c}`); // Should be 99

if (original.b.c === 2 && cloned.b.c === 99) {
  console.log('\n✅ PASS: The deep object was successfully disconnected!');
} else {
  console.log('\n❌ FAIL: The original was affected by the clone.');
}

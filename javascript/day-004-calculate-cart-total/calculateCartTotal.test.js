const assert = require("node:assert/strict");
const calculateCartTotal = require("./calculateCartTotal");

assert.equal(
  calculateCartTotal([
    { price: 12, quantity: 2 },
    { price: 5, quantity: 3 },
  ]),
  39
);

assert.equal(
  calculateCartTotal([
    { price: 99.99, quantity: 1 },
    { price: 0, quantity: 4 },
  ]),
  99.99
);

assert.equal(calculateCartTotal([]), 0);

assert.throws(() => calculateCartTotal("not an array"), /items must be an array/);
assert.throws(() => calculateCartTotal([null]), /each item must be an object/);
assert.throws(
  () => calculateCartTotal([{ price: -1, quantity: 1 }]),
  /price must be a non-negative number/
);
assert.throws(
  () => calculateCartTotal([{ price: 10, quantity: 1.5 }]),
  /quantity must be a non-negative integer/
);

console.log("Day 004 tests passed");
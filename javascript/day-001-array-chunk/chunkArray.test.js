const assert = require("node:assert/strict");
const chunkArray = require("./chunkArray");

assert.deepEqual(chunkArray([1, 2, 3, 4, 5], 2), [[1, 2], [3, 4], [5]]);
assert.deepEqual(chunkArray(["a", "b", "c"], 1), [["a"], ["b"], ["c"]]);
assert.deepEqual(chunkArray([], 3), []);

assert.throws(() => chunkArray("hello", 2), /items must be an array/);
assert.throws(() => chunkArray([1, 2, 3], 0), /size must be a positive integer/);

console.log("Day 001 tests passed");

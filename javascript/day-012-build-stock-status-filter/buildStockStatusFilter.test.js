const assert = require("node:assert/strict");
const buildStockStatusFilter = require("./buildStockStatusFilter");

assert.deepEqual(buildStockStatusFilter({}), {});

assert.deepEqual(buildStockStatusFilter({ inStock: "true" }), {
  stock: {
    $gt: 0,
  },
});

assert.deepEqual(buildStockStatusFilter({ inStock: " 1 " }), {
  stock: {
    $gt: 0,
  },
});

assert.deepEqual(buildStockStatusFilter({ inStock: false }), {
  stock: 0,
});

assert.deepEqual(buildStockStatusFilter({ inStock: 0 }), {
  stock: 0,
});

assert.deepEqual(buildStockStatusFilter({ inStock: "   " }), {});

assert.throws(() => buildStockStatusFilter(null), /query must be an object/);
assert.throws(
  () => buildStockStatusFilter({ inStock: "yes" }),
  /inStock must be true, false, 1, or 0/
);
assert.throws(
  () => buildStockStatusFilter({ inStock: 2 }),
  /inStock must be true, false, 1, or 0/
);

console.log("Day 012 tests passed");

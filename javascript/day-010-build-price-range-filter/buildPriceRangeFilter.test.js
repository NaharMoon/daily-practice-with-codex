const assert = require("node:assert/strict");
const buildPriceRangeFilter = require("./buildPriceRangeFilter");

assert.deepEqual(buildPriceRangeFilter({}), {});

assert.deepEqual(buildPriceRangeFilter({ minPrice: "10" }), {
  price: {
    $gte: 10,
  },
});

assert.deepEqual(buildPriceRangeFilter({ maxPrice: "99.99" }), {
  price: {
    $lte: 99.99,
  },
});

assert.deepEqual(
  buildPriceRangeFilter({
    minPrice: " 25 ",
    maxPrice: 100,
  }),
  {
    price: {
      $gte: 25,
      $lte: 100,
    },
  }
);

assert.throws(() => buildPriceRangeFilter(null), /query must be an object/);
assert.throws(
  () => buildPriceRangeFilter({ minPrice: "cheap" }),
  /minPrice must be a valid number/
);
assert.throws(
  () => buildPriceRangeFilter({ maxPrice: -5 }),
  /maxPrice must be a non-negative number/
);
assert.throws(
  () => buildPriceRangeFilter({ minPrice: 120, maxPrice: 50 }),
  /minPrice cannot be greater than maxPrice/
);

console.log("Day 010 tests passed");
const assert = require("node:assert/strict");
const buildProductSortOptions = require("./buildProductSortOptions");

assert.deepEqual(buildProductSortOptions({}), { createdAt: -1 });

assert.deepEqual(
  buildProductSortOptions({
    sortBy: "price",
    order: "asc",
  }),
  {
    price: 1,
  }
);

assert.deepEqual(
  buildProductSortOptions({
    sortBy: "rating",
    order: "desc",
  }),
  {
    rating: -1,
  }
);

assert.deepEqual(
  buildProductSortOptions({
    sortBy: " name ",
  }),
  {
    name: -1,
  }
);

assert.throws(() => buildProductSortOptions(null), /query must be an object/);
assert.throws(
  () => buildProductSortOptions({ sortBy: ["price"] }),
  /sortBy must be a string/
);
assert.throws(
  () => buildProductSortOptions({ sortBy: "stock" }),
  /sortBy must be one of: createdAt, price, rating, name/
);
assert.throws(
  () => buildProductSortOptions({ sortBy: "price", order: "up" }),
  /order must be "asc" or "desc"/
);

console.log("Day 009 tests passed");

const assert = require("node:assert/strict");
const buildCategoryFilter = require("./buildCategoryFilter");

assert.deepEqual(buildCategoryFilter({}), {});

assert.deepEqual(buildCategoryFilter({ category: "books" }), {
  category: {
    $in: ["books"],
  },
});

assert.deepEqual(buildCategoryFilter({ category: "books, tech, books" }), {
  category: {
    $in: ["books", "tech"],
  },
});

assert.deepEqual(buildCategoryFilter({ category: ["Lifestyle ", " travel"] }), {
  category: {
    $in: ["lifestyle", "travel"],
  },
});

assert.deepEqual(buildCategoryFilter({ category: "   " }), {});

assert.throws(() => buildCategoryFilter(null), /query must be an object/);
assert.throws(
  () => buildCategoryFilter({ category: "home decor" }),
  /categories can only contain letters, numbers, and hyphens/
);
assert.throws(
  () => buildCategoryFilter({ category: "food,@sale" }),
  /categories can only contain letters, numbers, and hyphens/
);

console.log("Day 011 tests passed");

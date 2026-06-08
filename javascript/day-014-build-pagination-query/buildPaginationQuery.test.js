const assert = require("node:assert/strict");
const buildPaginationQuery = require("./buildPaginationQuery");

assert.deepEqual(buildPaginationQuery({}), {
  page: 1,
  limit: 10,
  skip: 0,
});

assert.deepEqual(buildPaginationQuery({ page: " 3 ", limit: " 5 " }), {
  page: 3,
  limit: 5,
  skip: 10,
});

assert.deepEqual(buildPaginationQuery({ page: "2", limit: "100" }), {
  page: 2,
  limit: 50,
  skip: 50,
});

assert.throws(() => buildPaginationQuery(null), /query must be an object/);
assert.throws(
  () => buildPaginationQuery({ page: 2 }),
  /page must be a string/
);
assert.throws(
  () => buildPaginationQuery({ page: "0" }),
  /page must be at least 1/
);
assert.throws(
  () => buildPaginationQuery({ limit: "2.5" }),
  /limit must contain only digits/
);
assert.throws(
  () => buildPaginationQuery({ limit: "abc" }),
  /limit must contain only digits/
);

console.log("Day 014 tests passed");
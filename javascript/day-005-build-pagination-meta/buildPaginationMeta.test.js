const assert = require("node:assert/strict");
const buildPaginationMeta = require("./buildPaginationMeta");

assert.deepEqual(buildPaginationMeta(1, 10, 45), {
  page: 1,
  limit: 10,
  totalItems: 45,
  totalPages: 5,
  hasNextPage: true,
  hasPreviousPage: false,
});

assert.deepEqual(buildPaginationMeta(5, 10, 45), {
  page: 5,
  limit: 10,
  totalItems: 45,
  totalPages: 5,
  hasNextPage: false,
  hasPreviousPage: true,
});

assert.deepEqual(buildPaginationMeta(1, 10, 0), {
  page: 1,
  limit: 10,
  totalItems: 0,
  totalPages: 0,
  hasNextPage: false,
  hasPreviousPage: false,
});

assert.throws(() => buildPaginationMeta(0, 10, 20), /page must be a positive integer/);
assert.throws(() => buildPaginationMeta(1, 0, 20), /limit must be a positive integer/);
assert.throws(
  () => buildPaginationMeta(1, 10, -5),
  /totalItems must be a non-negative integer/
);

console.log("Day 005 tests passed");
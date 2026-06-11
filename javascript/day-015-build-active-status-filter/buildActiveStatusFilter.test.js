const assert = require("node:assert/strict");
const buildActiveStatusFilter = require("./buildActiveStatusFilter");

assert.deepEqual(buildActiveStatusFilter({}), {});

assert.deepEqual(buildActiveStatusFilter({ isActive: "true" }), {
  isActive: true,
});

assert.deepEqual(buildActiveStatusFilter({ isActive: " FALSE " }), {
  isActive: false,
});

assert.throws(() => buildActiveStatusFilter(null), /query must be an object/);
assert.throws(
  () => buildActiveStatusFilter({ isActive: true }),
  /isActive must be a string/
);
assert.throws(
  () => buildActiveStatusFilter({ isActive: "yes" }),
  /isActive must be "true" or "false"/
);
assert.throws(
  () => buildActiveStatusFilter({ isActive: "" }),
  /isActive must be "true" or "false"/
);

console.log("Day 015 tests passed");

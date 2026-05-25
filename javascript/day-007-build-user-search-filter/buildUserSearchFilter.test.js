const assert = require("node:assert/strict");
const buildUserSearchFilter = require("./buildUserSearchFilter");

assert.deepEqual(
  buildUserSearchFilter({
    search: "  ada  ",
    role: " Admin ",
    isActive: "true",
  }),
  {
    name: {
      $regex: "ada",
      $options: "i",
    },
    role: "admin",
    isActive: true,
  }
);

assert.deepEqual(
  buildUserSearchFilter({
    search: "   ",
    role: " developer ",
    isActive: false,
  }),
  {
    role: "developer",
    isActive: false,
  }
);

assert.deepEqual(buildUserSearchFilter({}), {});

assert.throws(() => buildUserSearchFilter(null), /query must be an object/);
assert.throws(
  () => buildUserSearchFilter({ search: 123 }),
  /search must be a string/
);
assert.throws(
  () => buildUserSearchFilter({ role: ["admin"] }),
  /role must be a string/
);
assert.throws(
  () => buildUserSearchFilter({ isActive: "yes" }),
  /isActive must be "true", "false", or a boolean/
);

console.log("Day 007 tests passed");
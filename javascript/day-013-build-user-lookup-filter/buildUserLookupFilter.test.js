const assert = require("node:assert/strict");
const buildUserLookupFilter = require("./buildUserLookupFilter");

assert.deepEqual(
  buildUserLookupFilter({ identifier: "507f1f77bcf86cd799439011" }),
  {
    _id: "507f1f77bcf86cd799439011",
  }
);

assert.deepEqual(
  buildUserLookupFilter({ identifier: " 507F1F77BCF86CD799439011 " }),
  {
    _id: "507f1f77bcf86cd799439011",
  }
);

assert.deepEqual(
  buildUserLookupFilter({ identifier: " Admin@Example.com " }),
  {
    email: "admin@example.com",
  }
);

assert.throws(() => buildUserLookupFilter(null), /params must be an object/);
assert.throws(
  () => buildUserLookupFilter({ identifier: "" }),
  /identifier cannot be empty/
);
assert.throws(
  () => buildUserLookupFilter({ identifier: "not-an-id" }),
  /identifier must be a valid email or 24-character MongoDB id/
);
assert.throws(
  () => buildUserLookupFilter({ identifier: "user@example" }),
  /identifier must be a valid email or 24-character MongoDB id/
);
assert.throws(
  () => buildUserLookupFilter({ identifier: 123 }),
  /identifier must be a string/
);

console.log("Day 013 tests passed");

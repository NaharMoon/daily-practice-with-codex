const assert = require("node:assert/strict");
const buildProfileUpdatePayload = require("./buildProfileUpdatePayload");

assert.deepEqual(
  buildProfileUpdatePayload({
    name: "  Ada Lovelace  ",
    email: "  ADA@EXAMPLE.COM ",
    bio: "  Builds analytical engines.  ",
    age: "21",
  }),
  {
    $set: {
      name: "Ada Lovelace",
      email: "ada@example.com",
      bio: "Builds analytical engines.",
      age: 21,
    },
  }
);

assert.deepEqual(
  buildProfileUpdatePayload({
    name: "   ",
    email: "   ",
    bio: " Loves clean APIs ",
  }),
  {
    $set: {
      bio: "Loves clean APIs",
    },
  }
);

assert.deepEqual(buildProfileUpdatePayload({}), {});

assert.throws(() => buildProfileUpdatePayload(null), /body must be an object/);
assert.throws(
  () => buildProfileUpdatePayload({ name: 42 }),
  /name must be a string/
);
assert.throws(
  () => buildProfileUpdatePayload({ email: ["ada@example.com"] }),
  /email must be a string/
);
assert.throws(
  () => buildProfileUpdatePayload({ age: "twelve" }),
  /age must be an integer greater than or equal to 13/
);
assert.throws(
  () => buildProfileUpdatePayload({ age: 10 }),
  /age must be an integer greater than or equal to 13/
);

console.log("Day 008 tests passed");

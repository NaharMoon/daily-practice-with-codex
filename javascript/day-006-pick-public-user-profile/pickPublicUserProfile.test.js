const assert = require("node:assert/strict");
const pickPublicUserProfile = require("./pickPublicUserProfile");

assert.deepEqual(
  pickPublicUserProfile({
    id: " user_123 ",
    name: " Ada Lovelace ",
    email: " ADA@Example.com ",
    role: " Admin ",
    isActive: true,
    password: "super-secret",
    refreshToken: "token-value",
  }),
  {
    id: "user_123",
    name: "Ada Lovelace",
    email: "ada@example.com",
    role: "admin",
    isActive: true,
  }
);

assert.deepEqual(
  pickPublicUserProfile({
    id: "user_456",
    name: "Grace Hopper",
    email: "grace@example.com",
    role: "developer",
    isActive: false,
    loginCount: 12,
  }),
  {
    id: "user_456",
    name: "Grace Hopper",
    email: "grace@example.com",
    role: "developer",
    isActive: false,
  }
);

assert.throws(() => pickPublicUserProfile(null), /user must be an object/);
assert.throws(
  () =>
    pickPublicUserProfile({
      id: "",
      name: "Ada",
      email: "ada@example.com",
      role: "admin",
      isActive: true,
    }),
  /user id must be a non-empty string/
);
assert.throws(
  () =>
    pickPublicUserProfile({
      id: "user_123",
      name: "Ada",
      email: "invalid-email",
      role: "admin",
      isActive: true,
    }),
  /user email must be a valid email string/
);
assert.throws(
  () =>
    pickPublicUserProfile({
      id: "user_123",
      name: "Ada",
      email: "ada@example.com",
      role: "admin",
      isActive: "yes",
    }),
  /user isActive must be a boolean/
);

console.log("Day 006 tests passed");

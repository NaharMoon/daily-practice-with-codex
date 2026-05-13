const assert = require("node:assert/strict");
const titleCase = require("./titleCase");

assert.equal(titleCase("mern stack developer"), "Mern Stack Developer");
assert.equal(titleCase("javaScript PRACTICE"), "Javascript Practice");
assert.equal(titleCase("  hello   world  "), "Hello World");
assert.equal(titleCase(""), "");

assert.throws(() => titleCase(["hello world"]), /text must be a string/);

console.log("Day 002 tests passed");

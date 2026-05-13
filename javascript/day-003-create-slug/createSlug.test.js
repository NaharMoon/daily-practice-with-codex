const assert = require("node:assert/strict");
const createSlug = require("./createSlug");

assert.equal(createSlug("Learn MERN in 30 Days"), "learn-mern-in-30-days");
assert.equal(createSlug("  Build_an_API   Fast  "), "build-an-api-fast");
assert.equal(createSlug("Node.js & Express Basics!"), "nodejs-express-basics");
assert.equal(createSlug("---Already-Slugged---"), "already-slugged");
assert.equal(createSlug(""), "");

assert.throws(() => createSlug(null), /text must be a string/);

console.log("Day 003 tests passed");

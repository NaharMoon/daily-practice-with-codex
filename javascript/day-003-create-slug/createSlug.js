function createSlug(text) {
  if (typeof text !== "string") {
    throw new TypeError("text must be a string");
  }

  return text
    .trim()
    .toLowerCase()
    .replace(/[_\s]+/g, "-")
    .replace(/[^a-z0-9-]/g, "")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

module.exports = createSlug;

function titleCase(text) {
  if (typeof text !== "string") {
    throw new TypeError("text must be a string");
  }

  return text
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

module.exports = titleCase;

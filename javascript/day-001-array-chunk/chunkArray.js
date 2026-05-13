function chunkArray(items, size) {
  if (!Array.isArray(items)) {
    throw new TypeError("items must be an array");
  }

  if (!Number.isInteger(size) || size <= 0) {
    throw new TypeError("size must be a positive integer");
  }

  const chunks = [];

  for (let index = 0; index < items.length; index += size) {
    chunks.push(items.slice(index, index + size));
  }

  return chunks;
}

module.exports = chunkArray;

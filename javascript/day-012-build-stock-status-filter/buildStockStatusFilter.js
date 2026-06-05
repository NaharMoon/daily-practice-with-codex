function parseInStock(value) {
  if (value === undefined || value === null) {
    return undefined;
  }

  if (typeof value === "boolean") {
    return value;
  }

  if (typeof value === "number") {
    if (value === 1) {
      return true;
    }

    if (value === 0) {
      return false;
    }
  }

  if (typeof value === "string") {
    const normalizedValue = value.trim().toLowerCase();

    if (normalizedValue === "") {
      return undefined;
    }

    if (normalizedValue === "true" || normalizedValue === "1") {
      return true;
    }

    if (normalizedValue === "false" || normalizedValue === "0") {
      return false;
    }
  }

  throw new TypeError("inStock must be true, false, 1, or 0");
}

function buildStockStatusFilter(query) {
  if (!query || typeof query !== "object" || Array.isArray(query)) {
    throw new TypeError("query must be an object");
  }

  const inStock = parseInStock(query.inStock);

  if (inStock === undefined) {
    return {};
  }

  if (inStock) {
    return {
      stock: {
        $gt: 0,
      },
    };
  }

  return {
    stock: 0,
  };
}

module.exports = buildStockStatusFilter;

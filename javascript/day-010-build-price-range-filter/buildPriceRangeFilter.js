function parsePrice(value, fieldName) {
  if (value === undefined || value === null || value === "") {
    return undefined;
  }

  const normalizedValue =
    typeof value === "string" ? value.trim() : value;

  if (normalizedValue === "") {
    return undefined;
  }

  if (
    (typeof normalizedValue !== "string" && typeof normalizedValue !== "number") ||
    Number.isNaN(Number(normalizedValue))
  ) {
    throw new TypeError(`${fieldName} must be a valid number`);
  }

  const parsedValue = Number(normalizedValue);

  if (!Number.isFinite(parsedValue) || parsedValue < 0) {
    throw new RangeError(`${fieldName} must be a non-negative number`);
  }

  return parsedValue;
}

function buildPriceRangeFilter(query) {
  if (!query || typeof query !== "object" || Array.isArray(query)) {
    throw new TypeError("query must be an object");
  }

  const minPrice = parsePrice(query.minPrice, "minPrice");
  const maxPrice = parsePrice(query.maxPrice, "maxPrice");

  if (minPrice === undefined && maxPrice === undefined) {
    return {};
  }

  if (
    minPrice !== undefined &&
    maxPrice !== undefined &&
    minPrice > maxPrice
  ) {
    throw new RangeError("minPrice cannot be greater than maxPrice");
  }

  const priceFilter = {};

  if (minPrice !== undefined) {
    priceFilter.$gte = minPrice;
  }

  if (maxPrice !== undefined) {
    priceFilter.$lte = maxPrice;
  }

  return {
    price: priceFilter,
  };
}

module.exports = buildPriceRangeFilter;
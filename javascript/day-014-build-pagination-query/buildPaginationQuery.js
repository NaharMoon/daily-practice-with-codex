function parsePositiveInteger(value, fieldName) {
  if (value === undefined) {
    return undefined;
  }

  if (typeof value !== "string") {
    throw new TypeError(fieldName + " must be a string");
  }

  const normalizedValue = value.trim();

  if (!/^\d+$/.test(normalizedValue)) {
    throw new TypeError(fieldName + " must contain only digits");
  }

  const parsedValue = Number(normalizedValue);

  if (parsedValue < 1) {
    throw new RangeError(fieldName + " must be at least 1");
  }

  return parsedValue;
}

function buildPaginationQuery(query) {
  if (!query || typeof query !== "object" || Array.isArray(query)) {
    throw new TypeError("query must be an object");
  }

  const page = parsePositiveInteger(query.page, "page") ?? 1;
  const requestedLimit = parsePositiveInteger(query.limit, "limit") ?? 10;
  const limit = Math.min(requestedLimit, 50);

  return {
    page,
    limit,
    skip: (page - 1) * limit,
  };
}

module.exports = buildPaginationQuery;
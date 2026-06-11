function parseBooleanQueryValue(value) {
  if (value === undefined) {
    return undefined;
  }

  if (typeof value !== "string") {
    throw new TypeError("isActive must be a string");
  }

  const normalizedValue = value.trim().toLowerCase();

  if (normalizedValue === "true") {
    return true;
  }

  if (normalizedValue === "false") {
    return false;
  }

  throw new TypeError('isActive must be "true" or "false"');
}

function buildActiveStatusFilter(query) {
  if (!query || typeof query !== "object" || Array.isArray(query)) {
    throw new TypeError("query must be an object");
  }

  const isActive = parseBooleanQueryValue(query.isActive);

  if (isActive === undefined) {
    return {};
  }

  return {
    isActive,
  };
}

module.exports = buildActiveStatusFilter;

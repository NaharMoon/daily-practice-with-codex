const ALLOWED_SORT_FIELDS = ["createdAt", "price", "rating", "name"];

function buildProductSortOptions(query) {
  if (!query || typeof query !== "object" || Array.isArray(query)) {
    throw new TypeError("query must be an object");
  }

  const sortByValue =
    typeof query.sortBy === "string" ? query.sortBy.trim() : query.sortBy;
  const orderValue =
    typeof query.order === "string" ? query.order.trim().toLowerCase() : query.order;

  if (sortByValue === undefined || sortByValue === "") {
    return { createdAt: -1 };
  }

  if (typeof sortByValue !== "string") {
    throw new TypeError("sortBy must be a string");
  }

  if (!ALLOWED_SORT_FIELDS.includes(sortByValue)) {
    throw new TypeError(
      `sortBy must be one of: ${ALLOWED_SORT_FIELDS.join(", ")}`
    );
  }

  if (
    orderValue !== undefined &&
    orderValue !== "" &&
    orderValue !== "asc" &&
    orderValue !== "desc"
  ) {
    throw new TypeError('order must be "asc" or "desc"');
  }

  return {
    [sortByValue]: orderValue === "asc" ? 1 : -1,
  };
}

module.exports = buildProductSortOptions;

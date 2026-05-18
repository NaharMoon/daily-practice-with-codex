function buildPaginationMeta(page, limit, totalItems) {
  if (!Number.isInteger(page) || page < 1) {
    throw new TypeError("page must be a positive integer");
  }

  if (!Number.isInteger(limit) || limit < 1) {
    throw new TypeError("limit must be a positive integer");
  }

  if (!Number.isInteger(totalItems) || totalItems < 0) {
    throw new TypeError("totalItems must be a non-negative integer");
  }

  const totalPages = totalItems === 0 ? 0 : Math.ceil(totalItems / limit);

  return {
    page,
    limit,
    totalItems,
    totalPages,
    hasNextPage: totalPages > 0 && page < totalPages,
    hasPreviousPage: page > 1,
  };
}

module.exports = buildPaginationMeta;
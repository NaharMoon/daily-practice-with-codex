function normalizeCategories(value) {
  if (value === undefined || value === null || value === "") {
    return [];
  }

  const rawCategories = Array.isArray(value)
    ? value
    : String(value).split(",");

  const cleanedCategories = rawCategories
    .map((category) => String(category).trim().toLowerCase())
    .filter(Boolean);

  const uniqueCategories = [...new Set(cleanedCategories)];

  if (uniqueCategories.length === 0) {
    return [];
  }

  if (
    uniqueCategories.some((category) => !/^[a-z0-9-]+$/.test(category))
  ) {
    throw new Error(
      "categories can only contain letters, numbers, and hyphens"
    );
  }

  return uniqueCategories;
}

function buildCategoryFilter(query) {
  if (!query || typeof query !== "object" || Array.isArray(query)) {
    throw new TypeError("query must be an object");
  }

  const categories = normalizeCategories(query.category);

  if (categories.length === 0) {
    return {};
  }

  return {
    category: {
      $in: categories,
    },
  };
}

module.exports = buildCategoryFilter;

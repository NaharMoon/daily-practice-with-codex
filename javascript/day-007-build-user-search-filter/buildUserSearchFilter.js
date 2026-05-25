function buildUserSearchFilter(query) {
  if (!query || typeof query !== "object" || Array.isArray(query)) {
    throw new TypeError("query must be an object");
  }

  const filter = {};
  const { search, role, isActive } = query;

  if (search !== undefined) {
    if (typeof search !== "string") {
      throw new TypeError("search must be a string");
    }

    const normalizedSearch = search.trim();

    if (normalizedSearch !== "") {
      filter.name = {
        $regex: normalizedSearch,
        $options: "i",
      };
    }
  }

  if (role !== undefined) {
    if (typeof role !== "string") {
      throw new TypeError("role must be a string");
    }

    const normalizedRole = role.trim().toLowerCase();

    if (normalizedRole !== "") {
      filter.role = normalizedRole;
    }
  }

  if (isActive !== undefined) {
    if (typeof isActive === "boolean") {
      filter.isActive = isActive;
    } else if (typeof isActive === "string") {
      const normalizedIsActive = isActive.trim().toLowerCase();

      if (normalizedIsActive === "true") {
        filter.isActive = true;
      } else if (normalizedIsActive === "false") {
        filter.isActive = false;
      } else if (normalizedIsActive !== "") {
        throw new TypeError('isActive must be "true", "false", or a boolean');
      }
    } else {
      throw new TypeError('isActive must be "true", "false", or a boolean');
    }
  }

  return filter;
}

module.exports = buildUserSearchFilter;
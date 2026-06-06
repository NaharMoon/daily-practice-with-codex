function normalizeIdentifier(identifier) {
  if (typeof identifier !== "string") {
    throw new TypeError("identifier must be a string");
  }

  const normalizedIdentifier = identifier.trim();

  if (normalizedIdentifier === "") {
    throw new TypeError("identifier cannot be empty");
  }

  if (normalizedIdentifier.includes("@")) {
    const normalizedEmail = normalizedIdentifier.toLowerCase();

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizedEmail)) {
      throw new TypeError("identifier must be a valid email or 24-character MongoDB id");
    }

    return {
      email: normalizedEmail,
    };
  }

  if (!/^[a-fA-F0-9]{24}$/.test(normalizedIdentifier)) {
    throw new TypeError("identifier must be a valid email or 24-character MongoDB id");
  }

  return {
    _id: normalizedIdentifier.toLowerCase(),
  };
}

function buildUserLookupFilter(params) {
  if (!params || typeof params !== "object" || Array.isArray(params)) {
    throw new TypeError("params must be an object");
  }

  return normalizeIdentifier(params.identifier);
}

module.exports = buildUserLookupFilter;

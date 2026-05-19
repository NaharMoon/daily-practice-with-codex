function pickPublicUserProfile(user) {
  if (!user || typeof user !== "object" || Array.isArray(user)) {
    throw new TypeError("user must be an object");
  }

  const { id, name, email, role, isActive } = user;

  if (typeof id !== "string" || id.trim() === "") {
    throw new TypeError("user id must be a non-empty string");
  }

  if (typeof name !== "string" || name.trim() === "") {
    throw new TypeError("user name must be a non-empty string");
  }

  if (typeof email !== "string" || !email.includes("@")) {
    throw new TypeError("user email must be a valid email string");
  }

  if (typeof role !== "string" || role.trim() === "") {
    throw new TypeError("user role must be a non-empty string");
  }

  if (typeof isActive !== "boolean") {
    throw new TypeError("user isActive must be a boolean");
  }

  return {
    id: id.trim(),
    name: name.trim(),
    email: email.trim().toLowerCase(),
    role: role.trim().toLowerCase(),
    isActive,
  };
}

module.exports = pickPublicUserProfile;

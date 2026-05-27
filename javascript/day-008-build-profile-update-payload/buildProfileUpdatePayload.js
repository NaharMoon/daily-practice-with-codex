function buildProfileUpdatePayload(body) {
  if (!body || typeof body !== "object" || Array.isArray(body)) {
    throw new TypeError("body must be an object");
  }

  const updates = {};
  const { name, email, bio, age } = body;

  if (name !== undefined) {
    if (typeof name !== "string") {
      throw new TypeError("name must be a string");
    }

    const normalizedName = name.trim();

    if (normalizedName !== "") {
      updates.name = normalizedName;
    }
  }

  if (email !== undefined) {
    if (typeof email !== "string") {
      throw new TypeError("email must be a string");
    }

    const normalizedEmail = email.trim().toLowerCase();

    if (normalizedEmail !== "") {
      updates.email = normalizedEmail;
    }
  }

  if (bio !== undefined) {
    if (typeof bio !== "string") {
      throw new TypeError("bio must be a string");
    }

    const normalizedBio = bio.trim();

    if (normalizedBio !== "") {
      updates.bio = normalizedBio;
    }
  }

  if (age !== undefined) {
    const parsedAge =
      typeof age === "string" && age.trim() !== "" ? Number(age.trim()) : age;

    if (!Number.isInteger(parsedAge) || parsedAge < 13) {
      throw new TypeError("age must be an integer greater than or equal to 13");
    }

    updates.age = parsedAge;
  }

  if (Object.keys(updates).length === 0) {
    return {};
  }

  return {
    $set: updates,
  };
}

module.exports = buildProfileUpdatePayload;

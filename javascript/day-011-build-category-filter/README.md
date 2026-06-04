# Day 011: Build Category Filter

## Task

Build a helper that reads `category` from an Express `req.query`-style object and returns a safe MongoDB filter for product categories.

## Expected Behavior

- Return `{}` when no category is provided.
- Accept a comma-separated string like `"books,tech"` or an array like `["books", "tech"]`.
- Trim spaces and lowercase each category.
- Remove duplicate categories.
- Return `{ category: { $in: [...] } }` when valid categories exist.
- Reject category names with unsupported characters.

## Why It Matters

This is a common MERN backend task when building product filters for store, blog, or marketplace endpoints.

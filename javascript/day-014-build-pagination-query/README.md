# Day 014: Build Pagination Query

## Task

Build a helper that reads `page` and `limit` from an Express `req.query`-style object and returns safe pagination values for a MongoDB query.

## Expected Behavior

- Throw an error when `query` is not an object.
- Default to `page: 1` and `limit: 10` when those values are missing.
- Accept string numbers like query parameters usually provide.
- Trim spaces before parsing.
- Reject non-digit values like `"2.5"` or `"abc"`.
- Reject values smaller than `1`.
- Cap `limit` at `50` to avoid very large queries.
- Return `page`, `limit`, and `skip`.

## Why It Matters

This is a common MERN backend task when building list endpoints for products, users, or orders without trusting raw query string input.
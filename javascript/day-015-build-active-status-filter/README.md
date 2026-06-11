# Day 015: Build Active Status Filter

## Task

Build a helper that reads `isActive` from an Express `req.query`-style object and returns a safe MongoDB-style filter.

## Expected Behavior

- Throw an error when `query` is not an object.
- Return an empty object when `isActive` is missing.
- Accept `"true"` and `"false"` string values like query parameters usually provide.
- Trim spaces and compare case-insensitively.
- Reject non-string values.
- Reject unsupported values like `"yes"` or `""`.
- Return `{ isActive: true }` or `{ isActive: false }`.

## Why It Matters

Boolean query params are common in MERN apps for filtering active users, published posts, or in-stock products. Parsing them safely avoids accidental truthy or falsy bugs in database queries.

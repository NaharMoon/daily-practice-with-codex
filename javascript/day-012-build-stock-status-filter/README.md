# Day 012: Build Stock Status Filter

## Task

Build a helper that reads `inStock` from an Express `req.query`-style object and returns a safe MongoDB filter for product availability.

## Expected Behavior

- Return `{}` when `inStock` is missing or empty.
- Accept `true`, `false`, `1`, and `0` as strings, numbers, or booleans.
- Trim spaces around string values.
- Return `{ stock: { $gt: 0 } }` when the request asks for in-stock items.
- Return `{ stock: 0 }` when the request asks for out-of-stock items.
- Reject unsupported values like `"yes"` or `2`.

## Why It Matters

This is a common MERN backend task when building product listing filters for e-commerce or inventory dashboards.

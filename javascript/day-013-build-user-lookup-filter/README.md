# Day 013: Build User Lookup Filter

## Task

Build a helper that reads `identifier` from an Express `req.params`-style object and returns a safe MongoDB filter for finding a user by `_id` or `email`.

## Expected Behavior

- Throw an error when `params` is not an object.
- Throw an error when `identifier` is missing, empty, or not a string.
- Trim spaces around the incoming value.
- Return `{ _id: "..." }` when the identifier is a valid 24-character MongoDB id.
- Return `{ email: "..." }` when the identifier is a valid email address.
- Lowercase emails and MongoDB ids for consistent lookups.
- Reject unsupported values like `"not-an-id"` or `"user@example"`.

## Why It Matters

This is a common MERN backend task when an API route needs to support a user lookup without trusting raw route parameters.

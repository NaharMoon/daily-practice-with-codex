# Day 010: Build Price Range Filter

## Task

Build a helper that reads `minPrice` and `maxPrice` from an Express `req.query`-style object and returns a safe MongoDB filter for product prices.

## Expected Behavior

- Return `{}` when no price range is provided.
- Return `{ price: { $gte: number } }` when only `minPrice` exists.
- Return `{ price: { $lte: number } }` when only `maxPrice` exists.
- Return `{ price: { $gte: number, $lte: number } }` when both exist.
- Reject invalid, negative, or reversed ranges.

## Why It Matters

This is a common MERN backend task when building product listing or search endpoints with optional filters.
# Day 005: Build Pagination Meta

## Goal

Write a JavaScript function that returns pagination metadata for an API response.

## Example

```js
buildPaginationMeta(2, 10, 45);
// {
//   page: 2,
//   limit: 10,
//   totalItems: 45,
//   totalPages: 5,
//   hasNextPage: true,
//   hasPreviousPage: true
// }
```

## What This Practices

- Using `Math.ceil` for pagination
- Returning structured API-friendly objects
- Validating request-style input values
- Thinking about list endpoints in Express and MongoDB apps
# Day 009: Build Product Sort Options

## Goal

Write a JavaScript function that converts simple Express query parameters into a safe MongoDB sort object for a product listing page.

## Example

```js
buildProductSortOptions({
  sortBy: "price",
  order: "asc",
});
// { price: 1 }
```

## What This Practices

- Whitelisting allowed sort fields from query parameters
- Normalizing request input before using it in backend logic
- Returning a small MongoDB-friendly sort object
- Applying a sensible default sort when no query is provided

# Day 007: Build User Search Filter

## Goal

Write a JavaScript function that turns Express query values into a small MongoDB-style user filter.

## Example

```js
buildUserSearchFilter({
  search: " ada ",
  role: " Admin ",
  isActive: "true",
});
// {
//   name: { $regex: "ada", $options: "i" },
//   role: "admin",
//   isActive: true
// }
```

## What This Practices

- Turning request query values into safe backend filters
- Trimming and normalizing string inputs
- Parsing simple boolean values from Express query params
- Building small MongoDB-friendly objects with validation
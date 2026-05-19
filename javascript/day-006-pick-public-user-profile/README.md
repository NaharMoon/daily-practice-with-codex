# Day 006: Pick Public User Profile

## Goal

Write a JavaScript function that returns only the safe fields you would send back from a user API.

## Example

```js
pickPublicUserProfile({
  id: "user_123",
  name: "Ada Lovelace",
  email: "ada@example.com",
  role: "admin",
  isActive: true,
  password: "super-secret",
});
// {
//   id: "user_123",
//   name: "Ada Lovelace",
//   email: "ada@example.com",
//   role: "admin",
//   isActive: true
// }
```

## What This Practices

- Selecting safe fields before sending an API response
- Using object destructuring for backend-friendly utilities
- Normalizing strings with `trim()` and `toLowerCase()`
- Validating user-shaped data in Node or Express code

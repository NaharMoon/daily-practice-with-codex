# Day 008: Build Profile Update Payload

## Goal

Write a JavaScript function that converts a small Express `req.body` object into a safe MongoDB update payload.

## Example

```js
buildProfileUpdatePayload({
  name: " Ada Lovelace ",
  email: " ADA@EXAMPLE.COM ",
  bio: " Builds analytical engines. ",
  age: "21",
});
// {
//   $set: {
//     name: "Ada Lovelace",
//     email: "ada@example.com",
//     bio: "Builds analytical engines.",
//     age: 21
//   }
// }
```

## What This Practices

- Whitelisting only allowed fields from request bodies
- Trimming and normalizing user input before saving
- Converting simple string values into backend-friendly types
- Building a small MongoDB `$set` update object with validation

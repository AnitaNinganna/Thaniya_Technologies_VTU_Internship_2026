# Express Middleware & Request Lifecycle

## Overview
Middleware is an important concept in Express.js. It allows developers to execute functions before the request reaches the final route handler.

## Request Lifecycle

Client Request → Middleware → Route Handler → Response

Every request passes through middleware functions before reaching the endpoint logic.

---

## What is Middleware?

Middleware is a function that runs between the request and the response.

Structure:

(req, res, next)

- req → Request object
- res → Response object
- next → Pass control to the next middleware

---

## Why Middleware is Important

Middleware helps in:

- Logging requests
- Authentication
- Validation
- Error handling
- Security

---

## Types of Middleware

1. Application middleware
2. Router middleware
3. Built-in middleware
4. Third-party middleware

Examples:

- express.json()
- cors()

---

## Example Middleware

```javascript
app.use((req,res,next)=>{
 console.log('Request received')
 next()
})
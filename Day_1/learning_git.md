# Day 1 – Full Stack Application Basics

## 1. How Real World Applications Work

Today I learned how real-world applications function internally.

Flow of execution:

1. User interacts with UI (Frontend)
2. Frontend sends request to backend
3. Backend processes business logic
4. Database stores or retrieves data
5. Backend sends response back to UI

This helped me understand complete application architecture.

---

## 2. Connecting React to Backend

Frontend communicates with backend using:

- fetch()
- axios

Steps:
- Call backend API endpoint
- Receive JSON response
- Update UI state dynamically

This clarified how frontend and backend integrate.

---

## 3. What is a REST API?

REST API principles:

- Stateless architecture
- Resource-based URLs
- Uses HTTP methods:
  - GET
  - POST
  - PUT
  - DELETE

Example endpoints:
- /users
- /products

Understood that APIs act as a communication bridge between frontend and backend.

---

## 4. Database Layer

Types of databases:
- MongoDB (NoSQL)
- SQL databases (MySQL, PostgreSQL)

Concepts learned:
- ORM (Object Relational Mapping)
- Mongoose for MongoDB
- Backend connects to database for CRUD operations

---

## 5. Project Folder Structure

Typical full stack structure:

Client/   → React frontend  
Server/   → Node.js backend  
Routes/   → API endpoints  
Controllers/ → Business logic  
Models/   → Database schema  

This helped me understand how professional projects are organized.

---

## 6. Industry Expectations from Interns

Key skills expected:

- Clean code practices
- API design understanding
- Git & Version control
- Use of environment variables
- Proper error handling

---

## 7. Express.js Code Understanding

File: hello.js

const express = require("express");
const app = express();

app.get('/hello', (req, res) => {
    res.json({ message: "Hello Interns!" });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

What I understood:

- express() creates server
- app.get() defines GET route
- '/hello' is endpoint
- res.json() sends JSON response
- app.listen() starts server on port 3000

When we visit:
http://localhost:3000/hello

It returns:
{ "message": "Hello Interns!" }

---

## Outcome of Day 1

- Understood full stack architecture
- Learned REST API basics
- Understood Express server setup
- Gained clarity on industry-level project structure
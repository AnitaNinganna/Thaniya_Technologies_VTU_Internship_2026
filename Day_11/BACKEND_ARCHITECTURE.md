# Day 11 – Backend Architecture with Express (MVC Structure)

## Topic
Routes, Controllers & Professional Backend Structure

---

# Recap of Previous Sessions

In the previous sessions we learned:

- React frontend basics
- Introduction to Node.js
- Express server setup
- REST APIs (GET, POST, PUT, DELETE)
- Middleware and request lifecycle

Today we focus on **how real backend projects are structured in professional applications.**

---

# Problem with Basic Backend Code

Most beginners write everything in a single file.

Example:

server.js
├── API routes
├── business logic
├── middleware
└── server configuration

As projects grow larger, this approach becomes difficult to maintain and manage.

---

# Why Backend Architecture Matters

In real-world applications:

- Projects may contain **50+ APIs**
- Multiple developers work on the same project
- Code must remain **organized and readable**

To solve this problem we use **Structured Backend Architecture**.

---

# MVC Architecture Concept

MVC stands for:

- **Model** → Handles data structure and database interaction
- **View** → Frontend layer (React in our case)
- **Controller** → Contains business logic

For backend APIs we mainly focus on:

# Create the markdown content and export it as an .md file using pypandoc as required
import pypandoc, textwrap, os

content = textwrap.dedent("""
# Day X – Revision of Express Middleware & Request Lifecycle

## What I Worked On
Today I revised important backend concepts related to Express.js Middleware and the Request Lifecycle in a REST API application. I reviewed how requests move from the client to the server and how middleware functions process the request before reaching the route handler.

## Work Summary
- Revised REST API structure created earlier using Node.js and Express.
- Reviewed previously created endpoints:
  - GET /users
  - POST /users
  - PUT /users/:id
  - DELETE /users/:id
- Studied the Request Lifecycle in an Express application:
  - Client Request
  - Middleware Processing
  - Route Handler
  - Server Response
- Learned the structure of middleware functions: (req, res, next)
  - req – Request object
  - res – Response object
  - next() – Pass control to the next middleware or route handler
- Reviewed why middleware is important in web applications.

## Hours Worked
6.0

## Show Your Work (Links)
Reference Links:
- https://expressjs.com/en/guide/using-middleware.html
- https://nodejs.org/en/docs

## Learnings / Outcomes
- Understood the role of middleware in Express.js applications.
- Learned how every request passes through middleware before reaching the route.
- Revised different uses of middleware such as:
  - Request logging
  - Authentication
  - Data validation
  - Error handling
  - Security
- Reviewed different types of middleware:
  - Application middleware
  - Router middleware
  - Built-in middleware
  - Third-party middleware

## Blockers / Risks
No major blockers today. The session focused mainly on revising and strengthening previously learned backend concepts.

## Skills Used
- Node.js
- Express.js
- REST API Development
- Middleware Concepts
- Backend Development
""")

output_path = "/mnt/data/day_revision_express_middleware.md"

pypandoc.convert_text(
    content,
    'md',
    format='md',
    outputfile=output_path,
    extra_args=['--standalone']
)

output_path
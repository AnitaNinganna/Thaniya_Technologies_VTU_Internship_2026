const express = require('express');
const app = express();
const PORT = 3000;

// middleware for parsing JSON bodies
app.use(express.json());

// request logger middleware
function requestLogger(req, res, next) {
  const time = new Date().toLocaleTimeString();
  console.log(`${time} ${req.method} ${req.originalUrl}`);
  next();
}

app.use(requestLogger);

// simple route to test
app.get('/user', (req, res) => {
  res.send('User endpoint');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

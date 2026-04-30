const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/hello', (req, res) => {
  res.send('Hello! My Express server is running.');
});

app.get('/add', (req, res) => {
  const a = parseFloat(req.query.a);
  const b = parseFloat(req.query.b);

  if (isNaN(a) || isNaN(b)) {
    return res.send("Error: Please provide valid numbers using query parameters 'a' and 'b'.");
  }

  const sum = a + b;
  res.send(`The sum of ${a} and ${b} is: ${sum}`);
});

app.get('/square', (req, res) => {
  const num = parseFloat(req.query.num);

  if (isNaN(num)) {
    return res.send("Error: Please provide a valid number.");
  }

  res.send(`The square of ${num} is: ${num * num}`);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
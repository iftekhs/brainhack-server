const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

const categories = require('./categories.json');

app.use(cors());

app.get('/', (req, res) => {
  res.send('Api running');
});

app.get('/categories/all', (req, res) => {
  res.send(categories);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

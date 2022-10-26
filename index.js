const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

const categories = require('./categories.json');
const courses = require('./courses.json');

app.use(cors());

app.get('/', (req, res) => {
  res.send('Api running');
});

app.get('/categories/all', (req, res) => {
  res.send(categories);
});

app.get('/courses/:id', (req, res) => {
  const id = req.params.id;
  const coursesCategory = categories.find((category) => category._id === id);

  if (id === '00') {
    return res.send({ courses, coursesCategory });
  }

  const filteredCourses = courses.filter((course) => course.category_id === id);

  res.send({ courses: filteredCourses, coursesCategory });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());

app.get('/api/projects', (req, res) => {
  res.json([{ name: 'Project 1', description: 'Description 1' }, { name: 'Project 2', description: 'Description 2' }]);
});

app.post('/api/contact', (req, res) => {
  // Handle contact form submission
  res.status(200).send('Contact form submitted');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
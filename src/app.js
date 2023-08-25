// src/app.js

const express = require('express');
const { router } = require('./routes.js');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/contacts', router);

// Health check endpoint
app.get('/status', (req, res) => {
  res.json({ message: 'API is up and running' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;

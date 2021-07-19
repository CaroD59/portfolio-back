const express = require('express');
const cors = require('cors');
const { backPort } = require('./db-config');

const app = express();
require('dotenv').config();
const gitRoutes = require('./Routes/git');
const contactRoutes = require('./Routes/contactform');

app.use(express.json());
app.use(cors());
app.use('/creations', gitRoutes);
app.use('/contact', contactRoutes);

app.listen(backPort, () => {
  console.log(`🚀 Server running on http://localhost:${backPort}/`);
});

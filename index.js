const express = require('express');
const cors = require('cors');
const { backPort } = require('./db-config');

const app = express();
require('dotenv').config();
const gitRoutes = require('./Routes/git');

app.use(express.json());
app.use(cors());
app.use('/creations', gitRoutes);

app.listen(backPort, () => {
  console.log(`🚀 Server running on http://localhost:${backPort}/`);
});

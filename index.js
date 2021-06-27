const express = require('express');

const app = express();
require('dotenv').config();
const cors = require('cors');

const PORT = process.env.PORT || 8000;
const gitRoutes = require('./Routes/git');

app.use(express.json());
app.use(cors());
app.use('/creations', gitRoutes);
app.listen(PORT, (err) => {
  if (err) console.error(err);
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

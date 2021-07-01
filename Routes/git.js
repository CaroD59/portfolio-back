const express = require('express');

const router = express.Router();
const { db } = require('../db-config');

router.get('/', async (req, res) => {
  const sql = 'SELECT * from github_creations';
  const [results] = await db.query(sql);
  res.json(results);
});

module.exports = router;

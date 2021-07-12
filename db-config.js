const mysql = require('mysql2/promise');
require('dotenv').config();

const { DB_HOST, DB_USER, DB_NAME, DB_PASSWORD, BACK_PORT } = process.env;

const db = mysql.createPool({
  connectionLimit: 10,
  host: DB_HOST,
  user: DB_USER,
  database: DB_NAME,
  password: DB_PASSWORD,
});

module.exports = { db, backPort: BACK_PORT };

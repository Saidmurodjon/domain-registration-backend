const mysql = require("mysql");
const { DB_HOST, DB_USER, DB_PASSWORD, DB } = require("../config");
const db = mysql.createConnection({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB,
});
module.exports = db;

const mysql = require("mysql");
const {DB, DB_HOST, DB_USERNAME, DB_PASSWORD, DB_NAME } = require("../config");
const {parseUri } = require('mysql-parse')
console.log(parseUri(process.env.DATABASE_URL))
const db = mysql.createPool({
  connectionLimit: 100,
  host:DB_HOST,
  user: DB_USERNAME,
  password:  DB_PASSWORD,
  database: DB_NAME,
});
module.exports = db;

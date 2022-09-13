const mysql = require("mysql");
const { DB_HOST, DB_USERNAME, DB_PASSWORD, DB_NAME } = require("../config");
// const { parseUri } = require("mysql-parse");
// const config = parseUri(DB);
// console.log(config.host);
const db = mysql.createConnection({
  host:DB_HOST,
  user: DB_USERNAME,
  password:  DB_PASSWORD,
  database: DB_NAME,
});
module.exports = db;

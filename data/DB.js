const mysql = require("mysql");
const { DB, DB_HOST, DB_USERNAME, DB_PASSWORD, DB_NAME } = require("../config");
const { parseUri } = require("mysql-parse");
const config = parseUri(DB);
console.log(DB_HOST);
const db = mysql.createConnection({
  host: DB_HOST || config.host,
  user: DB_USERNAME || config.user,
  password: DB_PASSWORD || config.password,
  database: DB_NAME || config.database,
});
module.exports = db;

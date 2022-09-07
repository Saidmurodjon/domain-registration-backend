const mysql = require("mysql");
const { DB } = require("../config");
const {parseUri } = require('mysql-parse')
const config=parseUri(DB)
const db = mysql.createConnection({
  host: config.host,
  user: config.user,
  password: config.password,
  database: config.database,
});
module.exports = db;

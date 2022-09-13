const mysql = require("mysql");
const {DB} = require("../config");
const {parseUri } = require('mysql-parse')
const confige=parseUri(DB)
// console.log(confige)
const db = mysql.createPool({
  connectionLimit: 100,
  host:confige.host||confige.host+":"+confige.port,
  user: confige.user,
  password:  confige.password,
  database: confige.database,
});
module.exports = db;

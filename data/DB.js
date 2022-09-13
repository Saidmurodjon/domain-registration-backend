const mysql = require("mysql");
const { DB_HOST, DB_USERNAME, DB_PASSWORD, DB_NAME } = require("../config");

const db = mysql.createPool({
  connectionLimit: 100,
  host:"domain-site.cg1t66reg2uh.us-east-1.rds.amazonaws.com",
  user: "admin",
  password:  "10202001",
  database: "domain-site",
});
module.exports = db;

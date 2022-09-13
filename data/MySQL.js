module.exports = function () {
  const db = require("./DB");
  db.getConnection((err,connection) => {
    if (err) {
      connection.release();
      console.log(' Error getting mysql_pool connection: ' + err);
      throw err;
    } else {
      console.log("MYSQL connected...");
    }
  });
};

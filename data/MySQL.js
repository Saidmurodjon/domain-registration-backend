module.exports = function () {
  const db = require("./DB");
  db.getConnection((err) => {
    if (err) {
      console.log(' Error getting mysql_pool connection: ' + err);
    } else {
      console.log("MYSQL connected...");
    }
  });
};

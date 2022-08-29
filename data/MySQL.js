module.exports = function () {
  const db = require("./DB");
  db.connect((err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("MYSQL connected...");
    }
  });
};

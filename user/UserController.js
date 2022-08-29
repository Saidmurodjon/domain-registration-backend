const db = require("../data/DB");
async function GetUser(req, res) {
  try {
    db.query("SELECT * FROM user", async (error, results) => {
      return res.status(200).send(results);
    });
  } catch (error) {
    console.log(error);
  }
}
async function PostUser(req, res) {
  try {
    const { name, email, password } = req.body;
    db.query(
      "INSERT INTO user SET ?",
      { name: name, email: email, password: password },
      async (error, results) => {
        return res.status(201).send(results);
      }
    );
  } catch (error) {
    console.log(error);
  }
}
module.exports = {
  GetUser,
  PostUser,
};

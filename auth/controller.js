const db = require("../data/DB");
async function Post(req, res) {
  try {
    db.query(
      `SELECT * FROM users WHERE email=${req.body.email}`,
      async (error, results) => {
        if (results && results.password === req.body.password) {
          return res.status(200).send(results);
        } else {
          return res.status(401);
        }
      }
    );
  } catch (error) {
    console.log(error);
  }
}
async function PostNew(req, res) {
  try {
    db.query(
      `SELECT * FROM users WHERE email=${req.body.email}`,
      async (error, results) => {
        if (!results) {
          db.query(
            "INSERT INTO users SET ?",
            req.body,
            async (error, results) => {
              return res.status(201).send(results);
            }
          );
        } else {
          return res
            .status(401)
            .send({ message: "This email has been created" });
        }
      }
    );
  } catch (error) {
    console.log(error);
  }
  try {
    db.query("INSERT INTO users SET ?", req.body, async (error, results) => {
      return res.status(201).send(results);
    });
  } catch (error) {
    console.log(error);
  }
}
async function Update(req, res) {
  const id = req.params.id;
  try {
    db.query(`SELECT * FROM users WHERE id =${id}`, async (error, results) => {
      console.log(results);
      if (results.length <= 0) {
        return res.status(404).send(error);
      } else {
        db.query(
          `UPDATE users SET ? WHERE id=${id}`,
          req.body,
          async (error, results) => {
            if (error) {
              console.log(error);
            }
            return res.status(200).send(results);
          }
        );
      }
    });
  } catch (error) {
    console.log(error);
  }
}
async function Delete(req, res) {
  const id = req.params.id;
  try {
    db.query(`SELECT * FROM users WHERE id =${id}`, async (error, results) => {
      console.log(results);
      if (results.length <= 0) {
        return res.status(404).send(error);
      } else {
        db.query(`DELETE FROM users WHERE id=${id}`, async (error, results) => {
          if (error) {
            console.log(error);
          }
          return res.status(200).send(results);
        });
      }
    });
  } catch (error) {
    console.log(error);
  }
}
module.exports = {
  PostNew,
  Post,
  Update,
  Delete,
};

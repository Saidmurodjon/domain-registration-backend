const db = require("../data/DB");
async function Post(req, res) {
  try {
    db.query(
      `SELECT * FROM customers WHERE email=${req.body.email}`,
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
async function Register(req, res) {
  try {
    const { email, password } = req.body;
    await db.query(
      "SELECT email FROM customers WHERE email = ?",
      [email],
      async (error, results) => {
        if (error) {
          console.log(error);
        }

        if (results.length > 0) {
          return res.status(400).send({
            message: "That email is already taken",
            type:"email"
          });
        } else if (password.length < 8) {
          return res.status(400).send({
            message: "Password too short",
            type:"password"
              });
        }
        // let hashedPassword = await bcrypt.hash(password, 8);
        // console.log(hashedPassword);
        await db.query(
          "INSERT INTO customers SET ?",
          req.body,
          (error, results) => {
            if (error) {
              console.log(error);
            } else {
              console.log(results);
              return res.status(201).send({
                message: "user registered",
              });
            }
          }
        );
      }
    );
  } catch (error) {
    console.log(error);
  }
}
async function Update(req, res) {
  const id = req.params.id;
  try {
    db.query(
      `SELECT * FROM customers WHERE id =${id}`,
      async (error, results) => {
        console.log(results);
        if (results.length <= 0) {
          return res.status(404).send(error);
        } else {
          db.query(
            `UPDATE customers SET ? WHERE id=${id}`,
            req.body,
            async (error, results) => {
              if (error) {
                console.log(error);
              }
              return res.status(200).send(results);
            }
          );
        }
      }
    );
  } catch (error) {
    console.log(error);
  }
}
async function Delete(req, res) {
  const id = req.params.id;
  try {
    db.query(
      `SELECT * FROM customers WHERE id =${id}`,
      async (error, results) => {
        console.log(results);
        if (results.length <= 0) {
          return res.status(404).send(error);
        } else {
          db.query(
            `DELETE FROM customers WHERE id=${id}`,
            async (error, results) => {
              if (error) {
                console.log(error);
              }
              return res.status(200).send(results);
            }
          );
        }
      }
    );
  } catch (error) {
    console.log(error);
  }
}
module.exports = {
  Register,
  Post,
  Update,
  Delete,
};

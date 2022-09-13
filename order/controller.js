const db = require("../data/DB");
async function Get(req, res) {
  try {
    db.query("SELECT * FROM orders", async (error, results) => {
      return res.status(200).send(results);
    });
  } catch (error) {
    console.log(error);
  }
}
async function Post(req, res) {
  try {
    const { email } = req.body;
    await db.query(
      "SELECT email FROM custimers WHERE email = ?",
      [email],
      async (error, results) => {
        if (error) {
          console.log(error);
        }

        if (results && results.length <= 0) {
          return res.status(400).send({
            message: "Siz avval ro'yxatdan o'tishingiz lozim!",
          });
        }
        // let hashedPassword = await bcrypt.hash(password, 8);
        // console.log(hashedPassword);
        await db.query(
          "INSERT INTO orders SET ?",
          req.body,
          (error, results) => {
            if (error) {
              console.log(error);
            } else {
              console.log(results);
              return res.status(201).send({
                message: "Buyrtma qabul qilindi",
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
    db.query(`SELECT * FROM orders WHERE id =${id}`, async (error, results) => {
      console.log(results);
      if (results.length <= 0) {
        return res.status(404).send(error);
      } else {
        db.query(
          `UPDATE orders SET ? WHERE id=${id}`,
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
    db.query(`SELECT * FROM orders WHERE id =${id}`, async (error, results) => {
      console.log(results);
      if (results.length <= 0) {
        return res.status(404).send(error);
      } else {
        db.query(
          `DELETE FROM orders WHERE id=${id}`,
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
module.exports = {
  Get,
  Post,
  Update,
  Delete,
};

// const db = require("../data/DB");
const mysql = require("mysql");

const db = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
});
console.log(db);
async function Get(req, res) {
  try {
    db.query("SELECT * FROM pochtas", async (error, results) => {
      if (error) {
        return res.status(400).send(error);
      }
      if (results) {
        return res.status(200).send(results);
      } else {
        return res.status(205).send("results");
      }
    });
  } catch (error) {
    console.log(error);
  }
}
async function Post(req, res) {
  try {
    db.query("INSERT INTO pochtas SET ?", req.body, async (error, results) => {
      return res.status(201).send(results);
    });
  } catch (error) {
    console.log(error);
  }
}
async function Update(req, res) {
  const id = req.params.id;
  try {
    db.query(
      `SELECT * FROM pochtas WHERE id =${id}`,
      async (error, results) => {
        console.log(results);
        if (results.length <= 0) {
          return res.status(404).send(error);
        } else {
          db.query(
            `UPDATE pochtas SET ? WHERE id=${id}`,
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
      `SELECT * FROM pochtas WHERE id =${id}`,
      async (error, results) => {
        console.log(results);
        if (results.length <= 0) {
          return res.status(404).send(error);
        } else {
          db.query(
            `DELETE FROM pochtas WHERE id=${id}`,
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
  Get,
  Post,
  Update,
  Delete,
};

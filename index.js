const express = require("express");
const app = express();
const router = require("./router/Router");
const cors = require("cors");
const { PORT } = require("./config");
app.use(express.json());
app.use(cors());
// to bind MySQL DataBase 
require("./data/MySQL")(app);
// main router
app.use("/", router ,);

app.listen(PORT, () => {
  console.log(`${PORT}'s port is working`);
});

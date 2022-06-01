const express = require("express");
const pool = require("./database.js");
const languages = require("./Api/language.js");
const department = require("./Api/department.js");
const app = express();
app.use(express.json());
require("dotenv/config");
app.use("/languages", languages);
app.use("/department", department);
app.get("/books", async (req, res) => {
  const data = await pool.query("SELECT * FROM books");
  res.send(data);
});

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`app listening on the port no. ${PORT}`));

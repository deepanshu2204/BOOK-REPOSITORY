const express = require("express");
const pool = require("../database.js");
const router = express.Router();
router.get("/", async (req, res) => {
  try {
    const getLanguage = await pool.query("Select * from languages");
    res.json(
      getLanguage.rows.reduce((acc, curr) => {
        acc = { ...acc, [curr.book_id]: curr.book_lang };
        return acc;
      }, {})
    );
  } catch (err) {
    res.json({ msg: "error", error: JSON.stringify(err.message) });
  }
});
router.post("/", async (req, res) => {
  try {
    const content = req.body;
    console.log(req.body.value);
    await pool.query(
      "Insert into languages(book_id,book_lang) values ($1,$2)",
      [content.book_id, content.book_lang]
    );
    res.json("new language is added");
  } catch (err) {
    // res.send("Error while posting");
    res.json({ msg: "error", error: JSON.stringify(err.message) });
  }
});
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const content = req.body;
    await pool.query("Update language set book_lang=$1 where book_id=$2", [
      content.book_lang,
      id,
    ]);
    res.json("table is updated");
  } catch (err) {
    res.json({ msg: "error", error: JSON.stringify(err.message) });
  }
});
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await pool.query("Delete from languages where book_id=$1", [id]);
    res.json("deleted");
  } catch (err) {
    res.json({ msg: "error", error: JSON.stringify(err.message) });
  }
});
module.exports = router;

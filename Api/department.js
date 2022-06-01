const express = require("express");
const pool = require("../database.js");
const router = express.Router();
router.get("/", async (req, res) => {
  try {
    const getDepartment = await pool.query("Select * from department");
    res.json(getDepartment);
  } catch (err) {
    res.json({ msg: "error", error: JSON.stringify(err.message) });
  }
});
router.post("/", async (req, res) => {
  try {
    const content = req.body;
    await pool.query(
      "Insert into department(book_id,book_genre) values ($1,$2)",
      [content.book_id, content.book_genre]
    );
    res.json("new department is added");
  } catch (err) {
    res.json({ msg: "error", error: JSON.stringify(err.message) });
  }
});
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const content = req.body;
    await pool.query("Update department set book_genre=$1 where book_id=$2", [
      content.book_genre,
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
    await pool.query("Delete from department where book_id=$1", [id]);
    res.json("deleted");
  } catch (err) {
    res.json({ msg: "error", error: JSON.stringify(err.message) });
  }
});
module.exports = router;

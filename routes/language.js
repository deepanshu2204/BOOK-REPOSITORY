const express = require("express");
const LangFunc = require("../controllers/language.js");
const lang = new LangFunc();
const router = express.Router();
router.get("/", lang.getLang);
router.post("/", lang.addLang);
router.put("/:id", lang.updateLang);
router.delete("/:id", lang.deleteLang);
module.exports = router;

/* ------------------------------------------------------------------------------------------------

get
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
post
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
put
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
delete
 try {
    const { id } = req.params;
    await pool.query("Delete from languages where book_id=$1", [id]);
    res.json("deleted");
  } catch (err) {
    res.json({ msg: "error", error: JSON.stringify(err.message) });
  }


*/

const sequelize = require("../connection.js");
const Language = require("../models/language.js");
class Lang {
  getLang = async (req, res, next) => {
    sequelize
      .sync()
      .then((res) => {
        return Language.findAll();
      })
      .then((lang) => {
        res.status(200).json(lang);
      })
      .catch((err) => console.log(err));
  };
  addLang = async (req, res, next) => {
    const content = req.body;
    sequelize
      .sync()
      .then((result) => {
        return Language.create({
          book_id: content.book_id,
          book_lang: content.book_lang,
        });
      })
      .then((lang) => res.status(200).json(lang))
      .catch((err) => console.log(err));
  };

  updateLang = async (req, res, next) => {
    const { id } = req.params;
    const content = req.body;
    sequelize
      .sync()
      .then((res) => {
        return Language.update(
          { book_lang: content.book_lang },
          { where: { book_id: id } }
        );
      })
      .then((lang) => res.status(200).json(lang))
      .catch((err) => console.log(err));
  };

  deleteLang = async (req, res, next) => {
    const { id } = req.params;
    sequelize
      .sync()
      .then((res) => {
        return Language.destroy({ where: { book_id: id } });
      })
      .then((lang) => res.status(200).json(lang))
      .catch((err) => console.log(err));
  };
}
module.exports = Lang;

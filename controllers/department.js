const sequelize = require("../connection.js");
const Department = require("../models/department.js");
class Dept {
  getDept = async (req, res, next) => {
    sequelize
      .sync()
      .then((res) => {
        return Department.findAll();
      })
      .then((departments) => {
        res.status(200).json(departments);
      })
      .catch((err) => console.log(err));
  };

  addDept = async (req, res, next) => {
    const content = req.body;
    sequelize
      .sync()
      .then((res) => {
        return Department.create({
          book_id: content.book_id,
          book_genre: content.book_genre,
        });
      })
      .then((dept) => res.status(200).json(dept))
      .catch((err) => console.log(err));
  };

  updateDept = async (req, res, next) => {
    const { id } = req.params;
    const content = req.body;
    sequelize
      .sync()
      .then((res) => {
        return Department.update(
          { book_genre: content.book_genre },
          { where: { book_id: id } }
        );
      })
      .then((dept) => res.status(200).json(dept))
      .catch((err) => console.log(err));
  };

  deleteDept = async (req, res, next) => {
    const { id } = req.params;
    sequelize
      .sync()
      .then((res) => {
        return Department.destroy({ where: { book_id: id } });
      })
      .then((dept) => res.status(200).json(dept))
      .catch((err) => console.log(err));
  };
}
module.exports = Dept;

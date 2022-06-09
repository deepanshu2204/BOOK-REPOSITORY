const { Sequelize } = require("sequelize");
const sequalize = require("../connection.js");

const Department = sequalize.define(
  "department",
  {
    book_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    book_genre: {
      type: Sequelize.STRING,
      allowNull: true,
    },
  },
  {
    timestamps: false,
  }
);
module.exports = Department;

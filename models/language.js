const { Sequelize } = require("sequelize");
const sequalize = require("../connection.js");

const Language = sequalize.define(
  "languages",
  {
    book_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    book_lang: {
      type: Sequelize.STRING,
      allowNull: true,
    },
  },
  {
    timestamps: false,
  }
);
module.exports = Language;

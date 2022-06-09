const Sequelize = require('sequelize');
const sequelize =require('../connection.js');


//in quote it is the name of the table 
module.exports = sequelize.define('author', {
  // Model attributes are defined here
  book_id : {
    type: Sequelize.INTEGER,
    primaryKey : true,
    allowNull : false,
  },
  author_id: {
    type: Sequelize.INTEGER,
    allowNull : false,

  },
  author_name : {
      type : Sequelize.STRING,
  },
  author_status : {
    type: Sequelize.STRING,
  }
},
{
  timestamps : false,
}
);


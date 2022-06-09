const Sequelize = require('sequelize');
const sequelize =require('../connection.js');


//in quote it is the name of the table 
module.exports  = sequelize.define('books', {
  // Model attributes are defined here
  book_id : {
    type: Sequelize.INTEGER,
    primaryKey : true,
    allowNull : false,
  },
  book_name: {
    type: Sequelize.STRING,
  },
  published_at : {
      type : Sequelize.DATE
  }
},
{
  timestamps : false,
}
);

const Sequelize = require('sequelize');
const sequelize =require('../connection.js');


//in quote it is the name of the table 
module.exports = sequelize.define('stock', {
  // Model attributes are defined here
  book_id : {
    type: Sequelize.INTEGER,
    primaryKey : true,
    allowNull : false,
  },
  book_count: {
    type: Sequelize.INTEGER,
    allowNull : false,
  },
},
{
  timestamps : false,
}
);

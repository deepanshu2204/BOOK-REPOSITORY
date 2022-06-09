const {Sequelize, Model} = require('sequelize');
const sequelize= require('../connection');

// const Details = sequelize.define('author_detail', {
    class author_detail extends Model{}
    author_detail.init({
    book_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
        allowNull: false
    },
    author_id:{
        type: Sequelize.INTEGER,
        unique: true,
        allowNull: false,
        primaryKey: true
    },
    author_desc: {
        type: Sequelize.STRING(3000)
    },
    author_age: {
        type: Sequelize.INTEGER

    },
}, 
   {sequelize, timestamps : false},    
);
// author_detail.hasMany(books{
//     foreignKey: {

//     }};
//     twee
// });
module.exports = author_detail;
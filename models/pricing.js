const {Sequelize, Model} = require('sequelize');
const sequelize= require('../connection');

// const Pricing = sequelize.define('pricing', {
    class pricing extends Model{}
    pricing.init({
    book_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        unique: true,
        allowNull: false,
        autoIncrement : true
    },
    book_price:{
        type: Sequelize.FLOAT,
        allowNull: false
        },
    book_discount: {
        type: Sequelize.FLOAT
    }
},{sequelize, timestamps : false},)
module.exports= pricing;
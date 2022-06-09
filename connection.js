// require ('dotenv/config');
// const Pool = require("pg").Pool;
// global.pool = new Pool({
//   user: process.env.USER,
//   host: process.env.HOST,
//   database: process.env.DATABASE,
//   password: process.env.PASSWORD,
//   port: process.env.PORT
// });
// module.exports= pool;
require ('dotenv/config');
const {Sequelize} = require('sequelize');
const sequelize = new Sequelize(process.env.DATABASE,process.env.USER,process.env.PASSWORD,{
  host:process.env.HOST,
  dialect: 'postgres',
  define:
  {
    freezeTableName: true
}});
try {
  sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}
module.exports= sequelize;

// const sequelize = new Sequelize(process.env.DATABASE,process.env.USER,process.env.PASSWORD, {
//   host: process.env.HOST,
//   dialect: 'postgres'
// });
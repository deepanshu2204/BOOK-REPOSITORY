// const config = require('././/config');
require ('dotenv/config');
const Pool = require("pg").Pool;
// const validate= require('./validation.js');
global.pool = new Pool({
  user: "iaqsqvmm",
  host: "satao.db.elephantsql.com",
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
  port: 5432,
});
pool.connect();




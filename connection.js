const config = require('././/config');
const Pool = require("pg").Pool;
// const validate= require('./validation.js');
global.pool = new Pool({
  user: "iaqsqvmm",
  host: "satao.db.elephantsql.com",
  database: config.DATABASE,
  password: config.PASSWORD,
  port: 5432,
});
pool.connect();




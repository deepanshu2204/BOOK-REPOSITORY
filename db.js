const Pool = require('pg').Pool;
require('dotenv/config');

global.pool = new Pool({

    user : process.env.USER_NAME,

    password: process.env.PASSWORD,

    database : process.env.DATABASE,

    host : process.env.HOST,

    port : process.env.PORT,

});

module.exports = pool;
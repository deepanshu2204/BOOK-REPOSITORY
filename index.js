const express = require("express");
require('dotenv/config');
const books =require("./routes/books.js");
const pricing= require("./routes/pricing.js");
const details= require("./routes/details.js");
const authorRoutes = require('./routes/author.js');
const stockRoutes = require('./routes/stock.js');
const abstractRoutes = require('./routes/abstract.js');
const department = require("./routes/department.js");
const language = require("./routes/language.js");
const ModelBooks = require('./models/Books.js');
const sequelize = require('./connection.js');
const app =express();
app.use(express.json());
app.use('/books',books);
app.use('/pricing',pricing);
app.use('/details',details);
app.use('/author' , authorRoutes);
app.use('/stock' , stockRoutes);
app.use('/abstract' , abstractRoutes);
app.use('/languages',language);
app.use('/department',department);
// sequelize.sync().then(async (res,err)=>{
//     if(!err){
//         console.log(res.rows);
//     }
//     else {
//         console.log(`Error occured ${err.message}`);
//     }
// });
app.get('/',(req,res)=>{
    res.send(`this is the home page `);
});
const PORT = process.env.LOCAL_PORT;
app.listen(PORT , ()=>console.log(`app listening on the port no. ${PORT}`));

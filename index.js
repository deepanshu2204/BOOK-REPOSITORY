const express = require("express");
require('dotenv/config');
const database = require("./connection.js");
const books =require("./routes/books.js");
const pricing= require("./routes/pricing.js");
const details= require("./routes/details.js");
const authorRoutes = require('./routes/author.js');
const stockRoutes = require('./routes/stock.js');
const abstractRoutes = require('./routes/abstract.js');
const department = require("./routes/department.js");
const language = require("./routes/language.js");
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
app.get('/',(req,res)=>{
    res.send(`this is the home page `);
});
const PORT = process.env.LOCAL_PORT;
app.listen(PORT , ()=>console.log(`app listening on the port no. ${PORT}`));
//bharat -this is my commit 
let xyz;

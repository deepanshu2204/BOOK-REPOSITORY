const express = require("express");
const sequelize = require("./connection.js");
require('dotenv/config');
const books =require("./routes/books.js");
const pricing= require("./routes/pricing.js");
const details= require("./routes/details.js");
const authorRoutes = require('./routes/author.js');
const stockRoutes = require('./routes/stock.js');
// const abstractRoutes = require('./routes/abstract.js');
const department = require("./routes/department.js");
const language = require("./routes/language.js");
const ModelBooks = require('./models/Books.js');
const app =express();
app.use(express.json());
app.use('/books',books);
app.use('/pricing',pricing);
app.use('/details',details);
app.use('/author' , authorRoutes);
app.use('/stock' , stockRoutes);
// app.use('/abstract' , abstractRoutes);
app.use('/languages',language);
app.use('/department',department);

// sequelize.sync().then((result,error) => {
// if(!error){
//
//       console.log(result);}
//  else{
//      console.log(error.message);
//  }
// });
app.get("/", (req,res) =>
  /*console.log('[TEST]!');*/
  res.send("Hello from Homepage.")
);

// sequelize.sync().then(async (res,err)=>{
//     if(!err){
//         console.log(res.rows);
//     }
//     else {
//         console.log(`Error occured ${err.message}`);
//     }
// });

const PORT = process.env.LOCAL_PORT;
app.listen(PORT , ()=>console.log(`server running on port: http://localhost:${PORT}`));

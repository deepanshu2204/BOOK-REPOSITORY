const express = require('express');
const app = express();
const pool = require('./db');
// import bookRoutes from './routes/books.js';
const bookRoutes = require('./routes/books.js');
const authorRoutes = require('./routes/author.js');
const stockRoutes = require('./routes/stock.js');
const abstractRoutes = require('./routes/abstract.js');
require('dotenv/config');


app.use(express.json());

app.use('/books' , bookRoutes);
app.use('/author' , authorRoutes);
app.use('/stock' , stockRoutes);
app.use('/abstract' , abstractRoutes);


app.get('/',(req,res)=>{
    res.send(`this is the home page `);
});


// app.post('/books', async (req,res)=>{
//     try{
//         console.log("Hello abc");
    
//         const {description} = req.body;
//        console.log(Object.values(description));
//         const newTodo = await pool.query(
//             `INSERT INTO books (book_id , book_name , published_at) VALUES ($1 , $2 , $3)`,
//           Object.values(description));
//             res.json(newTodo);
    
//     }catch(err){
//         console.error(err);
//         res.status(500).json({msg: 'error',
//     error: JSON.stringify(err.message)});
//     }
//     });


const PORT = process.env.LOCAL_POST;
app.listen(PORT , ()=>console.log(`app listening on the port no. ${PORT}`));

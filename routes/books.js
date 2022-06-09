const express = require('express');
const BookController = require('../controllers/books.controller.js');
const app = express();
app.use(express.json());

const bookcontroller = new BookController();

app.get('/', bookcontroller.getAllBooks);
app.get('/:id',bookcontroller.getBookByID);
app.post('/',bookcontroller.addBooks);
app.put('/', bookcontroller.updateBook);
app.delete('/' , async (_,res) => res.status(200).send("Please provide the id , for which the record you want to delete "));
app.delete('/:id',bookcontroller.removeBook);

// app.get('/', async (req, res) => {
//     // pool.query("SELECT * FROM books",(err, res) => {
//     //   if (!err) {
//     //     res.status(200).json(res.rows);
//     //   } else {
//     //     console.log(err.message);
//     //     res.status(500).json({error: JSON.stringify(err.message)});
//     //   }
//     // });
//   getAllFunction(req,res);
//   });
  
//   app.get('/:id', async(req,res)=>{
//       const {id} = req.params;

//       sequelize
//       .sync()
//       .then((_) => {
//         return  Books.findOne({
//           where : {book_id : id}
//         })
//       })
//       .then((rows) => {
//         if(rows){
//           res.status(200).send(rows);
//         }
//         else {
//           res.status(200).send(`Sorry, there is no row with book_id ${id}`);
//         }
//       })
//       .catch((err) => {
//         console.log(`Error is found ${err}`);
//         res.status(500).json({msg: 'error',
//         error: JSON.stringify(err.message)}); 
//       })
//     });



  // app.post('/', async(req,res)=>{

  //   const body = req.body;

  //   sequelize
  //   .sync()
  //   .then((res) => {
  //     return Books.create({book_name : body.book_name , published_at : body.published_at});
  //   })
  //   .then((book) => {
  //     console.log(`book with id has been created ---- ${book.book_id}`);
  //     res.status(200).json(book);
  //   })
  //   .catch((err) => {
  //     console.log(`Error is found ${err}`);
  //     res.status(500).json({msg: 'error',
  //     error: JSON.stringify(err.message)}); 
  //   });

  //   //   const {book_id, book_name, published_at} =req.body;
  //   //   if (book_id=="") throw "Please fill the Id.";
  //   //   if(isNaN(book_id)){throw "Please provide a number";};
  //   //   // if(published_at != Date("2022-11-25")) throw "Invalid Format";
  //   //   try{
  //   //     Date("2022-11-25");
  //   //   }
  //   //   catch(error){
  //   //     error.message; 
  //   //   }
  //   //  await pool.query("Insert into books (book_id,book_name, published_at) VALUES ($1, $2, $3)", [book_id, book_name, published_at], (error, results) => {
  //   //       if (!error) {
  //   //           res.status(201).json(`Book added with Id: ${book_id}`);
          
  //   //         } else {
  //   //           console.log(error.message);
  //   //           res.status(500).json({error: JSON.stringify(error.message)});
  //   //         }
  //   //   });
  // });
  // app.put('/', async(req,res)=>{
  //   const {book_id, book_name, published_at} = req.body;
  //   if (book_id=="") throw "Please fill the Id.";
  //   if(isNaN(book_id))throw "Please provide a number";
  //   // if((published_at) != Date("YYYY-MM-DD")) throw "Provide time in YYYY-MM-DD";

  //   // pool.query("Update books SET book_name=$1, published_at=$2 where book_id=$3", [book_name, published_at, book_id], (error, results) => {
  //   //     if (!error) {
  //   //         res.status(201).json(`Books updated with Id: ${book_id}`);
        
  //   //       } else {
  //   //         console.log(error.message);
  //   //         res.status(500).json({error: JSON.stringify(error.message)});
  //   //       }
  //   // });

  //   sequelize
  //   .sync()
  //   .then(_ => {
  //    return Books.update(
  //       {book_name : book_name , published_at : published_at},
  //       {where : {book_id : book_id}}
  //       )
  //   })
  //   .then((books)=>{
  //     res.status(200).send(`book with ${book_id} is updated`);
  //   })
  //   .catch(err => {
  //     console.log(`Error is found ${err}`);
  //     res.status(500).json({msg: 'error',
  //     error: JSON.stringify(err.message)}); 
  //   });

  // });
  

  // app.delete('/:id', async(req,res)=>{
  // //   const {book_id} =req.body;
  // //   if (book_id=="") throw "Please fill the Id.";
  // //     if(isNaN(book_id)){throw "Please provide a number";};
  // //  await pool.query("Delete from books where book_id=$1", [book_id], (error, results) => {
  // //       if (!error) {
  // //           res.status(201).json(`Book Deleted with id: ${book_id}`);
        
  // //         } else {
  // //           console.log(error.message);
  // //           res.status(500).json({error: JSON.stringify(error.message)});
  // //         }
  // //   });

  //   const {id} = req.params;

  //   sequelize
  //   .sync()
  //   .then((_) => {
  //     return  Books.findOne({
  //       where : {book_id : id}
  //     })
  //   })
  //   .then((rows) => {
  //     if(rows){
  //        rows.destroy();
  //       res.status(200).send(`the row with ${id} is deleted `);
  //     }
  //     else {
  //       res.status(200).send(`Sorry, there is no row with book_id ${id} to delete `);
  //     }
  //   })
  //   .catch((err) => {
  //     console.log(`Error is found ${err}`);
  //     res.status(500).json({msg: 'error',
  //     error: JSON.stringify(err.message)}); 
  //   })

  // });
  
  module.exports= app;
  
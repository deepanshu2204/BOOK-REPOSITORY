const express = require('express');
const AuthorController = require('../controllers/author.controller.js')
const app = express();

app.use(express.json());
const authorcontroller = new AuthorController();

app.get('/', authorcontroller.getAllAuthors);
app.get('/:id',authorcontroller.getAuthorById);
app.post('/',authorcontroller.addAuthor);
app.put('/', authorcontroller.updateAuthor);
app.delete('/' , async (_,res) => res.status(200).send("Please provide the id , for which the record you want to delete "));
app.delete('/:id',authorcontroller.removeAuthor);
// app.get('/', async (req,res)=>{
//     // try{
//     //     const todo = await pool.query(`select * from author`);
//     //     res.json(todo.rows);
//     // }catch(err){
//     //     console.error(err);
//     //     res.status(500).json({msg: 'error',
//     //     error: JSON.stringify(err.message)}); 
//     // }

    

// });

// // app.get('/:id' , async (req,res) =>{
// //     try{
// //         const {id} = req.params;
// //         const todo = await pool.query(`select * from author where book_id = $1`, [id]);
// //         res.json(todo.rows[0]);
// //     }catch(err){
// //         console.error(err);
// //         res.status(500).json({msg: 'error',
// //         error: JSON.stringify(err.message)}); 
// //     }
// // });


// app.get('/:id', async(req,res)=>{
    
//   });

// app.post('/' , async (req,res)=>{
//     // try{
//     //     const body = req.body ;
//     //     console.log(body);
//     //     const newTodo = await pool.query(`INSERT INTO author (book_id ,author_id , author_name , author_status) values ($1 , $2 , $3 , $4)`,
//     //      [body.book_id , body.author_id , body.author_name , body.author_status]);
//     //     res.json(newTodo.rows);
//     // }
//     // catch (err){
//     //     console.error(err);
//     //     res.status(500).json({msg: 'error',
//     //     error: JSON.stringify(err.message)}); 
//     // }

    
// });

// app.delete('/:id' , async (req,res)=>{
//     // try{
//     //     const {id} = req.params ;
//     //     // console.log(body);
//     //     const newTodo = await pool.query(`delete from author where book_id = $1`, [id]);
//     //     res.json("book is deleted");
//     // }
//     // catch (err){
//     //     console.error(err);
//     //     res.status(500).json({msg: 'error',
//     //     error: JSON.stringify(err.message)}); 
//     // }

    
 
// });

// app.put('/:id' ,async (req,res) => {
        
//         const body  = req.body;
//         if (body.book_id=="") throw "Please fill the Id.";
//         if(isNaN(body.book_id))throw "Please provide a number";

//     // try{
//         //     const {id} = req.params ;
//     //     const body = req.body;
//     //     const newTodo = await pool.query(`UPDATE author SET author_id = $1 , author_name = $2, author_status = $3 where book_id = $4`, [body.author_id,body.author_name,body.author_status,id]);
//     //     res.json(newTodo.rows);
//     // }catch(err){
//     //     console.error(err);
//     //     res.status(500).json({msg: 'error',
//     //     error: JSON.stringify(err.message)}); 
//     // }
//     // if((published_at) != Date("YYYY-MM-DD")) throw "Provide time in YYYY-MM-DD";

//     // pool.query("Update books SET book_name=$1, published_at=$2 where book_id=$3", [book_name, published_at, book_id], (error, results) => {
//     //     if (!error) {
//     //         res.status(201).json(`Books updated with Id: ${book_id}`);
        
//     //       } else {
//     //         console.log(error.message);
//     //         res.status(500).json({error: JSON.stringify(error.message)});
//     //       }
//     // });

//     sequelize
//     .sync()
//     .then(_ => {
//      return Author.update(
//         {
//         author_id : body.author_id , 
//         author_name : body.book_name ,
//         author_status : body.author_status,
//         },
//         {
//             where : {
//                         book_id : body.book_id,
//                     }
//         }
//         )
//     })
//     .then((author)=>{
//       res.status(200).send(`author with ${author.author_id} is updated`);
//     })
//     .catch(err => {
//       console.log(`Error is found ${err}`);
//       res.status(500).json({msg: 'error',
//       error: JSON.stringify(err.message)}); 
//     });

// });

module.exports = app;
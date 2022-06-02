const express = require('express');
const pool = require('./../connection');
const app = express();
app.use(express.json());
app.get('/', async(req,res)=>{
      try {
 const getDetails= await pool.query("SELECT * FROM author_detail");
        res.status(200).json(getDetails.rows);
      } catch(err) {
        console.log(err.message);
        res.status(500).json({error: JSON.stringify(err.message)});
      }
    });
  app.post('/',async (req,res)=>{
    const {book_id, author_id, author_desc, author_age} =req.body;
    if (book_id , author_id=="") throw "Please fill the Id.";
    if(isNaN(book_id,author_id)){throw "Please provide a number";};
    await pool.query("Insert into author_detail (book_id, author_id, author_desc, author_age) VALUES ($1, $2, $3, $4)", [book_id,author_id, author_desc, author_age], (error, results) => {
        if (!error) {
            res.status(201).json(`Author Details added with id: ${book_id}`);
        
          } else {
            console.log(error.message);
            res.status(500).json({error: JSON.stringify(error.message)});
          }
    });})
  app.put('/', async(req,res)=>{
        try{
            const {book_id, author_desc, author_age, author_id} =req.body;
              const todo = await pool.query("Update author_detail SET author_desc=$1, author_age=$2 where book_id=$3 and author_id= $4",
     [author_desc, author_age, book_id, author_id]);
      res.status(201).json(`Details updated with Id: ${book_id},${author_id}`);
        
          } catch{
            console.log(error.message);
            res.status(500).json({error: JSON.stringify(error.message)});
          }
    });

 app.delete('/', async(req,res)=>{
    try{
        const {book_id, author_id} =req.body;
   await pool.query("Delete from author_detail where book_id = $1 and author_id= $2", [author_id, book_id]);
            res.status(201).json(`Details deleted with Id: ${book_id,author_id}`);
        
          } 
          catch(error)
          {
            console.log(error.message);
            res.status(500).json({msg: "error", error: JSON.stringify(error.message)});
          }
    });

  module.exports = app;
const app = require("./details");

app.get('/', async(req, res) => {
    pool.query("SELECT * FROM books",(err, res) => {
      if (!err) {
        res.status(200).json(res.rows);
      } else {
        console.log(err.message);
        res.status(500).json({error: JSON.stringify(err.message)});
      }
    });
  });
  
  app.post('/', async(req,res)=>{
      const {book_id, book_name, published_at} =req.body;
      if (book_id=="") throw "Please fill the Id.";
      if(isNaN(book_id)){throw "Please provide a number";};
      // if(published_at != Date("2022-11-25")) throw "Invalid Format";
      try{
        Date("2022-11-25");
      }
      catch(error){
        error.message; 
      }
     await pool.query("Insert into books (book_id,book_name, published_at) VALUES ($1, $2, $3)", [book_id, book_name, published_at], (error, results) => {
          if (!error) {
              res.status(201).json(`Book added with Id: ${book_id}`);
          
            } else {
              console.log(error.message);
              res.status(500).json({error: JSON.stringify(error.message)});
            }
      });
  });
  app.put('/', async(req,res)=>{
    const {book_id, book_name, published_at} =req.body;
    if (book_id=="") throw "Please fill the Id.";
    if(isNaN(book_id)){throw "Please provide a number";};
    try{
      Date("2022-11-25");
    }
    catch(error){
      error.message; 
    }
    // if((published_at) != Date("YYYY-MM-DD")) throw "Provide time in YYYY-MM-DD";
    pool.query("Update books SET book_name=$1, published_at=$2 where book_id=$3", [book_name, published_at, book_id], (error, results) => {
        if (!error) {
            res.status(201).json(`Books updated with Id: ${book_id}`);
        
          } else {
            console.log(error.message);
            res.status(500).json({error: JSON.stringify(error.message)});
          }
    });
  });
  
  app.delete('/', async(req,res)=>{
    const {book_id} =req.body;
    if (book_id=="") throw "Please fill the Id.";
      if(isNaN(book_id)){throw "Please provide a number";};
   await pool.query("Delete from books where book_id=$1", [book_id], (error, results) => {
        if (!error) {
            res.status(201).json(`Book Deleted with id: ${book_id}`);
        
          } else {
            console.log(error.message);
            res.status(500).json({error: JSON.stringify(error.message)});
          }
    });
  });
  
  module.exports= app;
  
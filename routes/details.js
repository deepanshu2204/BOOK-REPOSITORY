const getDetails = (request, response) => {
    pool.query("SELECT * FROM author_detail", (err, res) => {
      if (!err) {
        
        response.status(200).json(res.rows);
      } else {
        console.log(err.message);
        res.status(500).json({error: JSON.stringify(err.message)});
      }
    });
  };
  const createDetails = (req,res)=>{
    const {book_id, author_id, author_desc, author_age} =req.body;
    if (book_id , author_id=="") throw "Please fill the Id.";
    if(isNaN(book_id,author_id)){throw "Please provide a number";};
    pool.query("Insert into author_detail (book_id, author_id, author_desc, author_age) VALUES ($1, $2, $3, $4)", [book_id,author_id, author_desc, author_age], (error, results) => {
        if (!error) {
            res.status(201).json(`Author Details added with id: ${book_id}`);
        
          } else {
            console.log(error.message);
            res.status(500).json({error: JSON.stringify(error.message)});
          }
    });
  }
  const updateDetails= (req,res)=>{
    const {book_id, author_desc, author_age, author_id} =req.body;
    pool.query("Update author_detail SET author_desc=$1, author_age=$2 where book_id=$3 and author_id= $4", [author_desc, author_age, book_id, author_id], (error, results) => {
        if (!error) {
            res.status(201).json(`Details updated with Id: ${book_id}, author_id}`);
        
          } else {
            console.log(error.message);
            res.status(500).json({error: JSON.stringify(error.message)});
          }
    });
  }
  const deleteDetails= (req,res)=>{
    const {book_id, author_id} =req.body;
    pool.query("Delete from author_detail where book_id = $1 and author_id= $2", [author_id, book_id], (error, results) => {
        if (!error) {
            res.status(201).json(`Details deleted with Id: ${book_id,author_id}`);
        
          } else {
            console.log(error.message);
            res.status(500).json({msg: "error", error: JSON.stringify(error.message)});
          }
    });
  }
  module.exports = {
     getDetails, createDetails, updateDetails,deleteDetails };
  
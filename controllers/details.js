const author_detail = require("../models/details");
class details{
   getDetail = async(req,res)=> {
    try{
  author_detail.sync().then(async() => {
   const getDetails =  await author_detail.findAll();
    res.status(201).json(getDetails);})}

    catch(error){
        console.log(error.message);
        res.status(500).json({error: JSON.stringify(error.message)});
         
      }
     }
     createDetail= async(req,res)=>{
        const {book_id, author_id, author_desc, author_age} =req.body;
        if (book_id , author_id =="") throw res.status(201).json("Please fill the Id.");
        if(isNaN(book_id,author_id)){throw res.status(201).json("Please provide a number");};
        // await pool.query("Insert into author_detail (book_id, author_id, author_desc, author_age) VALUES ($1, $2, $3, $4)", [book_id,author_id, author_desc, author_age], (error, results) => {
        
     author_detail.sync().then(async(error) => {
      try{
      // if(error){
      // throw error;
      // }
       await author_detail.create({book_id, author_id, author_desc, author_age});
        res.status(201).json(`Author added with id : ${book_id}`);}
       catch(error){
           console.log(error.message);
           res.status(500).json({error: JSON.stringify(error.message)});
       }
           })
      }
      updateDetail = async(req,res)=>{
        const {book_id, author_desc, author_age, author_id} =req.body;
        if (author_id,book_id == "") throw res.status(201).json("Please fill the Id.");
        if (isNaN(book_id,author_id)) throw res.status(201).json("Please provide a number");
        author_detail.sync().then(async(error) => {
         try{
          // if(error) throw error;
            await author_detail.update({author_desc,author_age},{where: {book_id, author_id}});
            res.status(201).json(`Details updated with Id: ${book_id},${author_id}`);
            console.log(res.rows);}
            catch(error){
                  console.log(error.message);
                  res.status(500).json({error: JSON.stringify(error.message)});
                }
          });}
         deleteDetail = async(req,res)=>{
            const {book_id, author_id} =req.body;
            if (book_id == "") throw res.status(201).json("Please fill the Id.");
  if (isNaN(book_id)) {
    throw res.status(201).json("Please provide a number");}
            author_detail.sync().then(async(error) =>{
              try{
            // if(error) throw error;
            await author_detail.destroy({where: {book_id, author_id}});
        //  await pool.query("Delete from author_detail where book_id = $1 and author_id= $2", [author_id, book_id]);
              res.status(201).json(`Details deleted with Id: ${book_id,author_id}`);
               console.log(res.rows);
                }
             catch(error)
                {
                  console.log(error.message);
                  res.status(500).json({msg: "error", error: JSON.stringify(error.message)});
                }
          });}}
    module.exports = details;
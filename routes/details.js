const express = require('express');
const app = express();
// const details = require('../models/details');
const conDetails = require("../controllers/details");
const objDetails = new conDetails();
app.use(express.json());
app.get('/', objDetails.getDetail);
app.post('/',objDetails.createDetail);
app.put('/', objDetails.updateDetail);
app.delete('/', objDetails.deleteDetail);
     //   try{
    // details.sync().then(async() => {
    //  const getDetails=  await details.findAll();
    //  console.log(get);
    //   res.status(201).json(getDetails);})}

    //   catch(error){
    //       console.log(error.message);
    //       res.status(500).json({error: JSON.stringify(error.message)});
           
    //     }
    //    });
  
//     const {book_id, author_id, author_desc, author_age} =req.body;
//     if (book_id , author_id =="") throw ("Please fill the Id.");
//     if(isNaN(book_id,author_id)){throw "Please provide a number";};
//     // await pool.query("Insert into author_detail (book_id, author_id, author_desc, author_age) VALUES ($1, $2, $3, $4)", [book_id,author_id, author_desc, author_age], (error, results) => {
    
//  details.sync().then(async(error) => {
//   try{
//   // if(error){
//   // throw error;
//   // }
//    await details.create({book_id, author_id, author_desc, author_age});
//     res.status(201).json(`Author added with id : ${book_id}`);}
//    catch(error){
//        console.log(error.message);
//        res.status(500).json({error: JSON.stringify(error.message)});
      
//    }
//   });});
  //  if (!error) {
  //           res.status(201).json(`Author Details added with id: ${book_id}`);
        
  //         } else {
  //           console.log(error.message);
  //           res.status(500).json({error: JSON.stringify(error.message)});
  //         }
  //   });})
  
//   const {book_id, author_desc, author_age, author_id} =req.body;
//   details.sync().then(async(error) => {
//    try{
//     // if(error) throw error;
//       await details.update({author_desc,author_age},{where: {book_id, author_id}});
//       res.status(201).json(`Details updated with Id: ${book_id},${author_id}`);
//       console.log(res.rows);}
//       catch(error){
//             console.log(error.message);
//             res.status(500).json({error: JSON.stringify(error.message)});
//           }
//     });});

 
//       const {book_id, author_id} =req.body;
//       details.sync().then(async(error) =>{
//         try{
//       // if(error) throw error;
//       await details.destroy({where: {book_id, author_id}});
//   //  await pool.query("Delete from author_detail where book_id = $1 and author_id= $2", [author_id, book_id]);
//         res.status(201).json(`Details deleted with Id: ${book_id,author_id}`);
//          console.log(res.rows);
//           }
//        catch(error)
//           {
//             console.log(error.message);
//             res.status(500).json({msg: "error", error: JSON.stringify(error.message)});
//           }
//     });});
    

  module.exports = app;
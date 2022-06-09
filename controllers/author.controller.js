const express = require('express');
const Author = require('../models/Author.js');
const sequelize = require('../connection.js');
const app = express();
app.use(express.json());

class AuthorController {
  AuthorController(){}

  getAllAuthors(req,res){
    return  sequelize
    .sync()
    .then(res => {
      return Author.findAll();
    })
    .then(authors => {
    //   console.log(authors);
      res.status(200).json(authors);
    })
    .catch((err) => {
      console.log(`Error is found ${err}`);
      res.status(500).json({msg: 'error',
      error: JSON.stringify(err.message)}); 
    })
  }

    getAuthorById(req,res){
    
        const {id} = req.params;

        return sequelize
        .sync()
        .then((_) => {
          return  Author.findOne({
            where : {author : id}
          })
        })
        .then((rows) => {
          if(rows){
            res.status(200).send(rows);
          }
          else {
            res.status(200).send(`Sorry, there is no row with author_id ${id}`);
          }
        })
        .catch((err) => {
          console.log(`Error is found ${err}`);
          res.status(500).json({msg: 'error',
          error: JSON.stringify(err.message)}); 
        })
  }

  addAuthor(req,res){
    const body = req.body ;
   return  sequelize
    .sync()
    .then((res) => {
      return Author.create({
        book_id : body.book_id,
        author_id : body.author_id,  
        author_name : body.author_name,
        author_status : body.author_status,
        });
    })
    .then((author) => {
      console.log(`author with id has been created ---- ${author.author_id}`);
      res.status(200).send(`the author has been created with author id ${author.author_id}`);
    })
    .catch((err) => {
      console.log(`Error is found ${err}`);
      res.status(500).json({msg: 'error',
      error: JSON.stringify(err.message)}); 
    });
  }

  updateAuthor(req,res){
    const body  = req.body;
        if (body.book_id=="") throw "Please fill the Id.";
        if(isNaN(body.book_id))throw "Please provide a number";

   return  sequelize
    .sync()
    .then(_ => {
     return Author.update(
        {
        author_id : body.author_id , 
        author_name : body.book_name ,
        author_status : body.author_status,
        },
        {
            where : {
                        book_id : body.book_id,
                    }
        }
        )
    })
    .then((author)=>{
      res.status(200).send(`author with ${author.author_id} is updated`);
    })
    .catch(err => {
      console.log(`Error is found ${err}`);
      res.status(500).json({msg: 'error',
      error: JSON.stringify(err.message)}); 
    })
  }

  removeAuthor(req,res){
    const {id} = req.params;

 return sequelize
    .sync()
    .then((_) => {
      return  Author.findOne({
        where : {book_id : id}
      })
    })
    .then((rows) => {
      if(rows){
         rows.destroy();
        res.status(200).send(`the row with ${id} is deleted `);
      }
      else {
        res.status(200).send(`Sorry, there is no row with book_id ${id} to delete `);
      }
    })
    .catch((err) => {
      console.log(`Error is found ${err}`);
      res.status(500).json({msg: 'error',
      error: JSON.stringify(err.message)}); 
    })
}

}

module.exports = AuthorController;
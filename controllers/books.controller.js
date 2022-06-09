const express = require('express');
const Books = require('../models/Books.js');
const sequelize = require('../connection.js');
const app = express();
app.use(express.json());

class BookController {
  BookController(){}

  getAllBooks(req,res){
    return  sequelize
    .sync()
    .then(res => {
      return Books.findAll();
    })
    .then(books => {
      // console.log(books);
      res.status(200).json(books);
    })
    .catch((err) => {
      console.log(`Error is found ${err}`);
      res.status(500).json({msg: 'error',
      error: JSON.stringify(err.message)}); 
    })
  }

    getBookByID(req,res){
    
    const {id} = req.params;
   return sequelize
    .sync()
    .then((_) => {
      return  Books.findOne({
        where : {book_id : id}
      })
    })
    .then((rows) => {
      if(rows){
        res.status(200).send(rows);
      }
      else {
        res.status(200).send(`Sorry, there is no row with book_id ${id}`);
      }
    })
    .catch((err) => {
      console.log(`Error is found ${err}`);
      res.status(500).json({msg: 'error',
      error: JSON.stringify(err.message)}); 
    })
  }

  addBooks(req,res){
    const body = req.body;

    return sequelize
    .sync()
    .then((res) => {
      return Books.create({book_name : body.book_name , published_at : body.published_at});
    })
    .then((book) => {
      console.log(`book with id has been created ---- ${book.book_id}`);
      res.status(200).json(book);
    })
    .catch((err) => {
      console.log(`Error is found ${err}`);
      res.status(500).json({msg: 'error',
      error: JSON.stringify(err.message)}); 
    })
  }

  updateBook(req,res){
    const {book_id, book_name, published_at} = req.body;
    if (book_id=="") throw "Please fill the Id.";
    if(isNaN(book_id))throw "Please provide a number";

   return sequelize
    .sync()
    .then(_ => {
     return Books.update(
        {book_name : book_name , published_at : published_at},
        {where : {book_id : book_id}}
        )
    })
    .then((books)=>{
      res.status(200).send(`book with ${book_id} is updated`);
    })
    .catch(err => {
      console.log(`Error is found ${err}`);
      res.status(500).json({msg: 'error',
      error: JSON.stringify(err.message)}); 
    })
  }

  removeBook(req,res){
    const {id} = req.params;

    sequelize
    .sync()
    .then((_) => {
      return  Books.findOne({
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
module.exports = BookController;
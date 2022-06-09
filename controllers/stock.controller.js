const express = require('express');
const Stock = require('../models/Stock.js');
const sequelize = require('../connection.js');
const app = express();
app.use(express.json());

class StockController {
    StockController(){}

  getAllStocks(req,res){
    return  sequelize
    .sync()
    .then(res => {
      return Stock.findAll();
    })
    .then(stocks => {
      console.log(stocks);
      res.status(200).json(stocks);
    })
    .catch((err) => {
      console.log(`Error is found ${err}`);
      res.status(500).json({msg: 'error',
      error: JSON.stringify(err.message)}); 
    });
  }

    getStockById(req,res){
    
        const {id} = req.params;

      return sequelize
      .sync()
      .then((_) => {
        return  Stock.findOne({
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

  addStock(req,res){
    const body = req.body;

   return sequelize
    .sync()
    .then((res) => {
      return Books.create(
          {
              book_id : body.book_id ,
              book_count : body.book_count,
          }
        );
    })
    .then((stock) => {
      console.log(`book with id has been created ---- ${body.book_id}`);
      res.status(200).json(stock);
    })
    .catch((err) => {
      console.log(`Error is found ${err}`);
      res.status(500).json({msg: 'error',
      error: JSON.stringify(err.message)}); 
    });
  }

  updateStock(req,res){
    const body = req.body;
    if (book_id=="") throw "Please fill the Id.";
    if(isNaN(book_id))throw "Please provide a number";

    return sequelize
    .sync()
    .then(_ => {
     return Stock.update(
        {book_count : body.book_count},
        {where : {book_id : body.book_id}}
        );
    })
    .then((Stock) => {
      res.status(200).send(`book with ${body.book_id} is updated`);
    })
    .catch(err => {
      console.log(`Error is found ${err}`);
      res.status(500).json({msg: 'error',
      error: JSON.stringify(err.message)}); 
    });

  }

  removeStock(req,res){
    const {id} = req.params;

    return sequelize
    .sync()
    .then((_) => {
      return  Stock.findOne({
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

module.exports = StockController;
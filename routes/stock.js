const express = require('express');
const StockController = require('../controllers/stock.controller.js');
const app = express();

app.use(express.json());

const stockcontroller = new StockController();

app.get('/', stockcontroller.getAllStocks);
app.get('/:id',stockcontroller.getStockById);
app.post('/',stockcontroller.addStock);
app.put('/', stockcontroller.updateStock);
app.delete('/' , async (_,res) => res.status(200).send("Please provide the id , for which the record you want to delete "));
app.delete('/:id',stockcontroller.removeStock);



module.exports = app;
const express = require('express');
const pool = require('./../connection.js');
const app = express();

app.use(express.json());

app.get('/', async (req,res)=>{
    try{
        const todo = await pool.query(`select * from stock`);
        res.json(todo.rows);
    }catch(err){
        console.error(err);
        res.status(500).json({msg: 'error',
        error: JSON.stringify(err.message)}); 
    }
});

app.get('/:id' , async (req,res) =>{
    try{
        const {id} = req.params;
        const todo = await pool.query(`select * from stock where book_id = $1`, [id]);
        res.json(todo.rows[0]);
    }catch(err){
        console.error(err);
        res.status(500).json({msg: 'error',
        error: JSON.stringify(err.message)}); 
    }
});


app.post('/' , async (req,res)=>{
    try{
        const body = req.body ;
        console.log(body);
        const newTodo = await pool.query(
            `INSERT INTO stock (book_id ,book_count) values ($1 , $2 )`,
         [body.book_id , body.book_count]);
        res.json("record has been successfully added");
    }
    catch (err){
        console.error(err);
        res.status(500).json({msg: 'error',
        error: JSON.stringify(err.message)}); 
    }
});

app.delete('/:id' , async (req,res)=>{
    try{
        const {id} = req.params ;
        // console.log(body);
        const newTodo = await pool.query(`delete from stock where book_id = $1`, [id]);
        res.json("stock detail is deleted");
    }
    catch (err){
        console.error(err);
        res.status(500).json({msg: 'error',
        error: JSON.stringify(err.message)}); 
    }
});

app.put('/:id' ,async (req,res) => {
    try{
        const {id} = req.params ;
        const body = req.body;
        const newTodo = await pool.query(`UPDATE stock SET  book_count = $1 where book_id = $2`, [body.book_count,id]);
        res.json(newTodo.rows);
    }catch(err){
        console.error(err);
        res.status(500).json({msg: 'error',
        error: JSON.stringify(err.message)}); 
    }
});

module.exports = app;
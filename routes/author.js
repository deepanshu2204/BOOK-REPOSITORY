const express = require('express');
const pool = require('./../connection.js');
const app = express();

app.use(express.json());

app.get('/', async (req,res)=>{
    try{
        const todo = await pool.query(`select * from author`);
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
        const todo = await pool.query(`select * from author where book_id = $1`, [id]);
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
        const newTodo = await pool.query(`INSERT INTO author (book_id ,author_id , author_name , author_status) values ($1 , $2 , $3 , $4)`,
         [body.book_id , body.author_id , body.author_name , body.author_status]);
        res.json(newTodo.rows);
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
        const newTodo = await pool.query(`delete from author where book_id = $1`, [id]);
        res.json("book is deleted");
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
        const newTodo = await pool.query(`UPDATE author SET author_id = $1 , author_name = $2, author_status = $3 where book_id = $4`, [body.author_id,body.author_name,body.author_status,id]);
        res.json(newTodo.rows);
    }catch(err){
        console.error(err);
        res.status(500).json({msg: 'error',
        error: JSON.stringify(err.message)}); 
    }
});

module.exports = app;
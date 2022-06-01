const express = require('express');
const app = express();

const pool = require('./../db.js');

app.use(express.json());

app.get('/', async (req,res)=>{
    try{
        const todo = await pool.query("select * from books");
        res.json(todo.rows); 
    }catch(err){
        console.error(err);
        res.status(500).json({msg: 'error',
        error: JSON.stringify(err.message)}); 
    }
});
app.get("/:id",async (req,res)=>{
    const {id} = req.params;
    try{
        const todo = await pool.query("Select * from books where book_id = $1" , [id]);
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
        // console.log(body);
        
        const newTodo = await pool.query(`
        INSERT INTO books (book_id ,book_name , published_at) values ($1 , $2 , $3)`,
         Object.values(body));
        res.json(newTodo.rows);
    }
    catch (err){
        console.error(err);
        res.status(500).json({msg: 'error',
        error: JSON.stringify(err.message)}); 
    }
});


//api for validation 
app.delete('/' , (_,res)=>{
res.send("please provide the id ");
});
app.delete('/:id' , async (req,res)=>{
    try{
        const {id} = req.params;
        if(id){
            console.log(req.body);
            if(id == "") throw "empty";
            if(isNaN(id)) throw "Not a Number"
            const newTodo = await pool.query(`delete from books where book_id = $1`, [id]);
            res.json("book is deleted");
        }else {
            throw "this no input"
        }
    }
    catch (err){
        console.error(err);
        res.status(500).json({msg: 'error',
        error: JSON.stringify(err.message)}); 
    }
});

//api for validation 
app.put('/' , (_,res)=>{
    res.send("please provide the id ");
    });
app.put('/:id' ,async (req,res) => {
    try{
        const {id} = req.params ;
        const {book_name , published_at} = req.body;
        if(book_name && published_at){
            const newTodo = await pool.query(`UPDATE books SET book_name = $1, published_at = $2 where book_id = $3`, [book_name,published_at,id]);
            res.json(newTodo.rows);
        }
        else throw "please provide the required information"
    }catch(err){
        console.error(err);
        res.status(500).json({msg: 'error',
        error: JSON.stringify(err.message)}); 
    }
});

module.exports =  app;
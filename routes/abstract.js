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
app.get('/getAllAuthorsWithBookId' , async (req,res)=>{
    try{
        const todo = await pool.query(`select books.book_id , author.author_name from books inner join author on books.book_id = author.book_id`);
        res.status(200).json(todo.rows);
    }catch(err){
        console.log(err.message);
        res.status(500).json({msg: 'error',
        error: JSON.stringify(err.message)}); 
    }
});

//get number of books 
app.get('/numberofbooks', async (_,res)=>{
    try{
        const todo = await pool.query(`select count(distinct(book_id)) from books`);
        res.status(200).json(todo.rows[0].count);
    }catch(err){
        console.log(err.message);
        res.status(500).json({msg: 'error',
        error: JSON.stringify(err.message)}); 
    }
});

//get number of authors 
app.get('/numberofauthors', async (_,res)=>{
    try{
        const todo = await pool.query(`select count(distinct(author_name)) from author`);
        res.status(200).json(todo.rows[0].count);
    }catch(err){
        console.log(err.message);
        res.status(500).json({msg: 'error',
        error: JSON.stringify(err.message)}); 
    }
});

//testing 
app.get('/xyz', async (_,res)=>{
    try{
        const todo = await pool.query(`select distinct(book_name) from books`);
        const task = await pool.query(`select distinct(author_name) from author`);
        res.status(200).json([todo.rows,...task.rows]);
        // res.status(200).json(task.rows);
    }catch(err){
        console.log(err.message);
        res.status(500).json({msg: 'error',
        error: JSON.stringify(err.message)});
    }
});


//book status 
app.get('/bookStatus', async (_,res)=>{
    try{
        const todo = await pool.query(`select book_count from stock`);
         res.status(200).json(todo.rows);
        // res.status(200).json(task.rows);
    }catch(err){
        console.log(err.message);
        res.status(500).json({msg: 'error',
        error: JSON.stringify(err.message)});
    }
});

app.get('/bookStatus/:id', async (_,res)=>{
    try{
        const {id} = _.params;
        const todo = await pool.query(`select book_count from stock where book_id = $1`,[id]);
        let check = todo.rows[0].book_count;
        if(check ===  null || isNaN(check) || check == undefined){
            res.status(200).json("The book status is not available");
        }
        else res.status(200).json(`${check} copies available`);
        // res.status(200).json(task.rows);
    }catch(err){
        console.log(err.message);
        res.status(500).json({msg: 'error',
        error: JSON.stringify(err.message)});
    }
});

//author availability  
app.get('/authorStatus', async (_,res)=>{
    try{
        const todo = await pool.query(`select author_name from author`);
         res.status(200).json(todo.rows);
        // res.status(200).json(task.rows);
    }catch(err){
        console.log(err.message);
        res.status(500).json({msg: 'error',
        error: JSON.stringify(err.message)});
    }
});

app.get('/authorStatus/:id', async (_,res)=>{
    try{
        const {id} = _.params;
        const todo = await pool.query(`select author_status from author where book_id = $1`,[id]);
        const authorName = await pool.query(
            `select author_name from author where book_id = $1`,[id]
        );
        let check = todo.rows[0].author_status;
        if(check ===  null ||  check == undefined){
            res.status(200).json("The book status is not available");
        }
        else if(check == 'available')
        res.status(200).json(`${authorName.rows[0].author_name} is available`);
        else res.status(200).json(`${authorName.rows[0].author_name} is not available`);
        // res.status(200).json(task.rows);
    }catch(err){
        console.log(err.message);
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
const express = require('express');
const app = express();

app.get('',(req,res)=>{
    res.send(`this is the home page `);
});
const port = 5000;
app.listen(port , ()=>{
	console.log(`app listening on the port no. ${port}`);
});


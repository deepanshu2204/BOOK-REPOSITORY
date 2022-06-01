const express = require("express");
const database = require("./connection.js");
const books =require("./routes/books.js");
const pricing= require("./routes/pricing.js");
const details= require("./routes/details.js");
const app = express();
const PORT = 5000;
// const { valPost } = require("./validation.js");
// const { response } = require("express");
// const users =require('./routes/users');
app.use(express.json());
app.get("/books", books.getBooks);
app.get("/pricing", pricing.getPrice);
app.post("/pricing", pricing.createPrice);
app.post('/books',books.createBooks);
// app.post("/books", valPost, (err,req, res, next) => {
//   database.createBooks;
// console.log(valPost.ContextBuilder.message);
// // res.status(500).json.stringify(err.message);
// });
app.put("/books", books.updateBooks);
app.delete("/books", books.deleteBooks);
app.put("/pricing", pricing.updatePrice);
app.delete("/pricing", pricing.deletePrice);
app.get("/details", details.getDetails);
app.post("/details", details.createDetails);
app.put("/details", details.updateDetails);
app.delete("/details", details.deleteDetails);
app.get("/", (req, res) =>
  /*console.log('[TEST]!');*/
  res.send("Hello from Homepage.")
);

app.listen(PORT, () =>
  console.log(`Server Running on port: http://localhost:${PORT}`)
);

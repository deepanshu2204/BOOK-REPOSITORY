const getPrice = (request, response) => {
    pool.query("SELECT * FROM pricing", (err, res) => {
      if (!err) {
        response.status(200).json(res.rows);
      } else {
        console.log(err.message);
        res.status(500).json({ error: JSON.stringify(err.message) });
      }
    });
  };
  const createPrice = (req, res) => {
    const { book_id, book_price, book_discount } = req.body;
    if (book_id == "") throw "Please fill the Id.";
    if (isNaN(book_id)) {
      throw "Please provide a number";
    }
    if (isNaN(book_price) && !(num > 0)) throw "Provide numerical value.";
    if (book_price < book_discount) throw "Price cannot be less than discount";
    pool.query(
      "Insert into pricing (book_id, book_price, book_discount) VALUES ($1, $2, $3)",
      [book_id, book_price, book_discount],
      (error, results) => {
        if (!error) {
          res
            .status(201)
            .json(`Price of book with id: ${book_id} is $${book_price}`);
        } else {
          console.log(error.message);
          res.status(500).json({ error: JSON.stringify(error.message) });
        }
      }
    );
  };
  const updatePrice = (req, res) => {
    const { book_id, book_price, book_discount } = req.body;
    if (book_id == "") throw "Please fill the Id.";
    if (isNaN(book_id)) throw "Please provide a number";
    if (isNaN(book_price) || book_price < 0) throw "Provide Numerical value.";
    //   if (isNaN(book_price)) throw "Provide Numerical value.";
    //   if(book_price<0) throw "Provide positive integer";
    if (book_price < book_discount) throw "Price cannot be less than discount";
    pool.query(
      "Update pricing SET book_price=$1, book_discount=$2 where book_id=$3",
      [book_price, book_discount, book_id],(error, results) => {
        if (!error) {
          res.status(201).json(`Price updated with Id: ${book_id}`);
        } else {
          console.log(error.message);
          res.status(500).json({ error: JSON.stringify(error.message) });
        }
      }
    );
  };
  const deletePrice = (req, res) => {
    const { book_id } = req.body;
    if (book_id == "") throw "Please fill the Id.";
    if (isNaN(book_id)) {
      throw "Please provide a number";
    }
    pool.query(
      "Delete from pricing where book_id = $1",
      [book_id], (error, results) => {
        if (!error) {
          res.status(201).json(`Price deleted with Id: ${book_id}`);
        } else {
          console.log(error.message);
          res.status(500).json({ error: JSON.stringify(error.message) });
        }
      }
    );
  };
  module.exports = { getPrice, createPrice, updatePrice, deletePrice };
  
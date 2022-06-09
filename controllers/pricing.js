const pricing = require('../models/pricing');

class pricings{
getPrice= async(req, res) => {
 pricing.sync().then(async()=>{
  try{
   const getPrice =  await pricing.findAll();
      res.status(200).json(getPrice);
    } 
    catch(error) {
      console.log(error.message);
      res.status(500).json({ error: JSON.stringify(error.message) });
    }
  });
};
createPrice= async(req, res) => {
  
  const { book_id, book_price, book_discount } = req.body; 
  if (book_id == "") throw  res.status(201).json("Please fill the Id.");
  if (isNaN(book_id)) {
    throw  res.status(201).json("Please provide a number");
  }
  if (isNaN(book_price) && !(book_price > 0)) throw  res.status(201).json("Provide numerical value.");
  if (book_price < book_discount) throw  res.status(201).json("Price cannot be less than discount");

  pricing.sync().then(async()=>{
    try{
     await pricing.create({book_id, book_price, book_discount}); 
        res.status(201).json(`Price of book with id: ${book_id} is $${book_price}`);

      } 
      catch(error){
        console.log(error.message);
        res.status(500).json({ error: JSON.stringify(error.message) });
      };});
    };

updatePrice= async(req, res) => {
  const { book_id, book_price, book_discount } = req.body;
  if (book_id == "") throw res.status(201).json("Please fill the Id.");
  if (isNaN(book_id)) throw res.status(201).json("Please provide a number");
  if (isNaN(book_price) || book_price < 0) throw res.status(201).json("Provide Numerical value.");
  //   if (isNaN(book_price)) throw "Provide Numerical value.";
  //   if(book_price<0) throw "Provide positive integer";
  if (book_price < book_discount) throw res.status(201).json("Price cannot be less than discount");
  pricing.sync().then(async() => {
    try{
     // if(error) throw error;
  await pricing.update({book_price,book_discount},{where: {book_id}});
  res.status(201).json(`Price updated with Id: ${book_id}`);
      } 
      catch(error) {
        console.log(error.message);
        res.status(500).json({ error: JSON.stringify(error.message) });
      }
    })};
deletePrice= async(req, res) => {
  const { book_id } = req.body;
  if (book_id == "") throw res.status(201).json("Please fill the Id.");
  if (isNaN(book_id)) {
    throw res.status(201).json("Please provide a number");
  } pricing.sync().then(async(error)=>{
    try{
  await pricing.destroy({where : {book_id}});
        res.status(201).json(`Price deleted with Id: ${book_id}`);
      } catch(error) {
        console.log(error.message);
        res.status(500).json({ error: JSON.stringify(error.message) });
      }
    }
  );
};}
module.exports = pricings;
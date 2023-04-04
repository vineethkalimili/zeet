const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const DatasRoute = require('./routes/datas');
const PricesRoute = require('./routes/prices');
const Price = require('./models/Price');


const app = express();
require('dotenv/config');

app.use(bodyParser.json());
app.use('/datas',DatasRoute);
app.use('/prices',PricesRoute);


// DB CONNECTION
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true })
  .then(() => {
    console.log('Connected to DB..!');
  })
  .catch((error) => {
    console.error('Database connection error:', error);
  });



  // Get all Datas
app.get('/', async(req,res) =>{
    try{
        const prices = await Price.find();
        res.json(prices);
    }catch(err){
        res.json({message : err});
}
});








app.listen(3000);
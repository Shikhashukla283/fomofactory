const cron = require('node-cron');
const axios = require('axios');
const mongoose = require('mongoose');
const express = require('express');
require('dotenv').config();
const cors = require('cors');

const app = express();
app.use(cors());

///---------------------------------- Mongo Connection ----------------------------------/// 
mongoose.connect(process.env.MONGO_URI, {
    serverSelectionTimeoutMS: 20000  // Increase the timeout to 20 seconds
  }).then(() => console.log('MongoDB connected'))
    .catch(err => console.log('MongoDB connection error:', err));
  
///---------------------------------- Mongo Connection ----------------------------------/// 


///---------------------------------- Mongo Model Defined ----------------------------------/// 
const DataSchema = new mongoose.Schema({
  symbol: String,
  price: Number,
  timestamp: { type: Date, default: Date.now }
});
const Data = mongoose.model('Data', DataSchema);
///---------------------------------- Mongo Model Defined ----------------------------------/// 



///---------------------------------- Function to Fetch Data from  CoinGecko ----------------------------------/// 
async function fetchData() {
  const symbols = ['bitcoin', 'ethereum', 'dogecoin','cardano','solana']; // Example symbols
  symbols.forEach(async symbol => {
      try {
          const url = `https://api.coingecko.com/api/v3/simple/price?ids=${symbol}&vs_currencies=usd`;
          const response = await axios.get(url);
          const price = response.data[symbol].usd;
          const newData = new Data({ symbol: symbol, price: price });
          await newData.save();
          console.log(`Data saved for ${symbol}: $${price}`);
      } catch (error) {
          console.error(`Error fetching data for ${symbol}:`, error);
      }
  });
}
///---------------------------------- Function to Fetch Data from  CoinGecko ----------------------------------/// 


app.get('/api/data/:symbol', async (req, res) => {
    console.log("ddd");
    const data = await Data.find({ symbol: req.params.symbol }).sort({ timestamp: -1 }).limit(20);
    res.json(data);
  });

  
///---------------------------------- Schedule the fetchData function to run every 5 minute ----------------------------------/// 
cron.schedule('*/10 * * * * *', fetchData);
///---------------------------------- Schedule the fetchData function to run every 5 minute ----------------------------------/// 


const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const express = require('express');
const cors = require('cors');

const app = express();
const port = 3010;
app.use(cors());

app.get('/', (req, res) => {
  res.send('Welcome to Stock portfolio analysis API!');
});

function calculatereturns(boughtAt, marketPrice, quantity) {
  let result = quantity * (marketPrice - boughtAt);
  return result;
}

app.get('/calculate-returns', (req, res) => {
  const boughtAt = parseFloat(req.query.boughtAt);
  const marketPrice = parseFloat(req.query.marketPrice);
  const quantity = parseInt(req.query.quantity);
  res.send(calculatereturns(boughtAt, marketPrice, quantity).toString());
});

function totalreturns(stock1, stock2, stock3, stock4) {
  let result = stock1 + stock2 + stock3 + stock4;
  return result;
}

app.get('/total-returns', (req, res) => {
  const stock1 = parseFloat(req.query.stock1);
  const stock2 = parseFloat(req.query.stock2);
  const stock3 = parseFloat(req.query.stock3);
  const stock4 = parseFloat(req.query.stock4);
  res.send(totalreturns(stock1, stock2, stock3, stock4).toString());
});

function calculatereturnpercentage(boughtAt, returns) {
  let result = ((boughtAt - returns) / boughtAt) * 100;
  return result;
}

app.get('/calculate-return-percentage', (req, res) => {
  const boughtAt = parseFloat(req.query.boughtAt);
  const returns = parseFloat(req.query.returns);

  res.send(calculatereturnpercentage(boughtAt, returns).toString());
});

function totalreturns(stock1, stock2, stock3, stock4) {
  let result = stock1 + stock2 + stock3 + stock4;
  return result;
}

app.get('/total-return-percentage', (req, res) => {
  const stock1 = parseFloat(req.query.stock1);
  const stock2 = parseFloat(req.query.stock2);
  const stock3 = parseFloat(req.query.stock3);
  const stock4 = parseFloat(req.query.stock4);
  res.send(totalreturns(stock1, stock2, stock3, stock4).toString());
});

function status(returnPercentage) {
  if (returnPercentage > 0) {
    return 'profit';
  } else {
    return 'loss';
  }
}

app.get('/status', (req, res) => {
  const returnPercentage = parseFloat(req.query.returnPercentage);
  res.send(status(returnPercentage).toString());
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

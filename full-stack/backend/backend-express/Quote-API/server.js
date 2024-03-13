const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const app = express();

const { quotes } = require('./data');
const { getRandomElement } = require('./utils');

const PORT = process.env.PORT || 4001;

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(morgan('dev'));

app.get('/api/quotes/random', (req, res) => {
  const randomQuote = getRandomElement(quotes);
  res.json(randomQuote);
});

app.get('/api/quotes', (req, res) => {
  const { person } = req.query;
  let quotesToSend = quotes;

  if (person) {
    quotesToSend = quotes.filter(quote => quote.person === person);
  }

  res.json(quotesToSend);
});

app.post('/api/quotes', (req, res) => {
  const { quote, person } = req.query;

  if (!quote || !person) {
    return res.status(400).json({ message: "Both 'quote' and 'person' are required in the query string." });
  }

  const newQuote = { quote, person };
  quotes.push(newQuote);
  res.status(201).json({ message: 'Quote added successfully', quote: newQuote });
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

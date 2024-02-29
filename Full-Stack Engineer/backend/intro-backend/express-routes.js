///////////////////////////////////////////////////////
//Setup a server//////////////////////////////////////
//////////////////////////////////////////////////////

const express = require('express');
const app = express();

const PORT = process.env.PORT || 4001;

// Invoke the app's `.listen()` method below:
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

///////////////////////////////////////////////////////
//Writing Your First Route////////////////////////////
//////////////////////////////////////////////////////

const express = require('express');
const app = express();

const PORT = process.env.PORT || 4001;
// Use static server to serve the Express Yourself Website
app.use(express.static('public'));

// Open a call to `app.get()` below:
app.get('/expressions', (req, res, next) => {
console.log('hello')});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

///////////////////////////////////////////////////////
//Sending A Response///////////////////////////////////
//////////////////////////////////////////////////////

const express = require('express');
const app = express();
const { seedElements } = require('./utils');

// Serves Express Yourself website
app.use(express.static('public'));

const PORT = process.env.PORT || 4001;

const expressions = [];
seedElements(expressions, 'expressions');

// Get all expressions
app.get('/expressions', (req, res, next) => {
    res.send(expressions);
;
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

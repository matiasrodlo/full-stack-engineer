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

///////////////////////////////////////////////////////////////////////////
//EXPRESS MIDDLEWARE CODE CHALLENGES///////////////////////////////////////
//////////////////////////////////////////////////////////////////////////

const express = require('express');
const app = express();

// Finish this function and use it in the routes below

const sendFruitResponse = (req, res, next) => {
  res.send('fruit');
}

app.get('/whatis/apple', sendFruitResponse);

app.get('/whatis/orange', sendFruitResponse);

app.get('/whatis/banana', sendFruitResponse);

///////////////////////////////////////////////////////////////////////////
//EXPRESS MIDDLEWARE CODE CHALLENGES 2 ////////////////////////////////////
//////////////////////////////////////////////////////////////////////////

const express = require('express');
const app = express();

const moods = ['happy', 'exuberant', 'fanatical about middleware'];

const moodleware = (req, res, next) => {
  const randomMoodIndex = Math.floor(Math.random() * moods.length);
  req.mood = moods[randomMoodIndex];
    // Don't forget next!
  next();
}

app.use(moodleware);

app.get('/randomMood', (req, res, next) => {
  res.send(req.mood);
});

///////////////////////////////////////////////////////////////////////////
//EXPRESS MIDDLEWARE CODE CHALLENGES 3 ////////////////////////////////////
//////////////////////////////////////////////////////////////////////////

const express = require('express');
const app = express();

const database = {
  snacks: ['chips', 'apple', 'cookies'],
  sides: ['beans and rice', 'cole slaw', 'broccoli'],
  appetizers: ['oysters', 'dumplings', 'smoked almonds'],
};

// Add your code here:
const timeMiddleware = (req, res, next) => {  
  req.date = Date.now();
  next();
};

app.use(timeMiddleware);

app.get('/snacks', (req, res, next) => {
  res.send(`Snacks as of ${req.date}: ${database.snacks}`);
});

app.get('/sides', (req, res, next) => {
  res.send(`Sides as of ${req.date}: ${database.sides}`);
});

app.get('/appetizers', (req, res, next) => {
  res.send(`Appetizers as of ${req.date}: ${database.appetizers}`);
});

///////////////////////////////////////////////////////////////////////////
//EXPRESS MIDDLEWARE CODE CHALLENGES 4 ////////////////////////////////////
//////////////////////////////////////////////////////////////////////////

const express = require('express');
const app = express();

const foods = ['pasta carbonara', 'bánh mì', 'cucumber salad'];

app.get('/foods/:index', (req, res, next) => {
  if (foods[req.params.index]) {
    res.send(req.params.index);
  } else {
    const err = Error('Invalid index!');
    err.status = 404;
    next(err);
  }
});

const errorHandler = (err, req, res, next) => {
  if (!err.status) {
    err.status = 500;
  }
  res.status(err.status).send(err.message);
}

app.use(errorHandler);

///////////////////////////////////////////////////////////////////////////
//EXPRESS MIDDLEWARE CODE CHALLENGES 5 ////////////////////////////////////
//////////////////////////////////////////////////////////////////////////

const express = require('express');
const app = express();
// Add your code below:
const morgan = require('morgan');
app.use(morgan('short'));

// Add your code above

app.get('/say-hi', (req, res, next) => {
  res.send('Hi!');
});

app.get('/say-bye', (req, res, next) => {
  res.send('Bye!');
});

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

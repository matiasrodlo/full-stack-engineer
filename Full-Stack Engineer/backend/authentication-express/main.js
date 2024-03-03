var images = new Map([
    ["lucy", 'https://static-assets.codecademy.com/content/paths/web-security/sessions-cookies/localStorage-exercise/lucy.jpg'],
    ["red", 'https://static-assets.codecademy.com/content/paths/web-security/sessions-cookies/localStorage-exercise/red.jpg'],
    ["maxine", 'https://static-assets.codecademy.com/content/paths/web-security/sessions-cookies/localStorage-exercise/maxine.jpg'],
  ]);
  
  function selectProfile(name){
    if (name != localStorage.getItem('profile')) {
      alert("Now setting character to... " + name)
    }
    // Set the profile in localStorage below:
    localStorage.setItem('profile', name);
  }
  
  function loadProfile(){
    // Set character to the 'profile' value from localStorage
    var character = localStorage.getItem('profile');
  
    if (character) {
      display_character(character)
    }
  }
  
  function display_character(name) {
    var img = document.createElement('img');
    img.src = images.get(name);
    document.getElementById('character').appendChild(img);
  } 
  
  function loadHome(){
    if (localStorage.getItem('profile')) {
      display_character(name)
    }
  }

//////////////////////////////////////////////////////////////////////////
//Using Queries///////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////

  const express = require('express');
const app = express();

// Serves Express Yourself website
app.use(express.static('public'));

const { getElementById, getIndexById, updateElement,
        seedElements } = require('./utils');

const expressions = [];
seedElements(expressions, 'expressions');

const PORT = process.env.PORT || 4001;

app.get('/expressions', (req, res, next) => {
  res.send(expressions);
});

app.get('/expressions/:id', (req, res, next) => {
  const foundExpression = getElementById(req.params.id, expressions);
  if (foundExpression) {
    res.send(foundExpression);
  } else {
    res.status(404).send();
  }
});

app.put('/expressions/:id', (req, res, next) => {
  
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

//////////////////////////////////////////////////////////////////////////
//Using Queries///////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////

const express = require('express');
const app = express();

// Serves Express Yourself website
app.use(express.static('public'));

const { getElementById, getIndexById, updateElement,
  seedElements, createElement } = require('./utils');

const expressions = [];
seedElements(expressions, 'expressions');

const PORT = process.env.PORT || 4001;

app.get('/expressions', (req, res, next) => {
  res.send(expressions);
});

app.get('/expressions/:id', (req, res, next) => {
  const foundExpression = getElementById(req.params.id, expressions);
  if (foundExpression) {
    res.send(foundExpression);
  } else {
    res.status(404).send();
  }
});

app.put('/expressions/:id', (req, res, next) => {
  const expressionIndex = getIndexById(req.params.id, expressions);
  if (expressionIndex !== -1) {
    updateElement(req.params.id, req.query, expressions);
    res.send(expressions[expressionIndex]);
  } else {
    res.status(404).send();
  }
});

// Add your POST handler below:
const newElement = createElement('emoji', {name: 'example', emoji: ':)'});
if (newElement) {
  elements.push(newElement);
}

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

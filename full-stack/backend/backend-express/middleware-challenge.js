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

///////////////////////////////////////////////////////////////////////////
//EXPRESS MIDDLEWARE CODE CHALLENGES 6 ////////////////////////////////////
//////////////////////////////////////////////////////////////////////////

const express = require('express');
const app = express();

const data = [1, 2, 3, 4, 5];

const indexExists = (req, res, next) => {
  const index = req.params.index;
  if (data[index]) {
    next();
  } else {
    res.status(404).send();
  }
};

// Add your code below:
app.use('/data/:index', indexExists);

// Add your code above

app.get('/data/:index', (req, res, next) => {
  res.send(data[req.params.index]);
});

app.put('/data/:index', (req, res, next) => {
  data[req.params.index] = req.body.number;
  res.send(data[req.params.index]);
});

app.delete('/data/:index', (req, res, next) => {
  data.splice(req.params.index, 1);
  res.status(204).send();
});

app.get('/', (req, res, next) => {
  res.send(data);
});

///////////////////////////////////////////////////////////////////////////
//EXPRESS MIDDLEWARE CODE CHALLENGES 7 ////////////////////////////////////
//////////////////////////////////////////////////////////////////////////

const express = require('express');
const app = express();

const cors = require('cors');

app.use(cors());

///////////////////////////////////////////////////////////////////////////
//EXPRESS MIDDLEWARE CODE CHALLENGES 8 ////////////////////////////////////
//////////////////////////////////////////////////////////////////////////

const express = require('express');
const app = express();

const secretData = {
  adminUsers: ['1', '2', '51'],
  coolPhoneNumbers: ['555-555-CODE', '555-EXP-RESS', 'MID-DLE-WARE'],
  favSites: ['codecademy.com', 'expressjs.com']
}

const publicData = {
  colors: ['green', 'orange'],
  numbers: [1, 2, 3, 4, 5]
}

const isAdmin = (req, res, next) => {
  const id = req.params.userId;
  if (!secretData.adminUsers.includes(id)) {
    res.status(401).send(); // Unauthorized
  } else {
    next();
  }
}
app.use(['/:userId/phone-numbers', '/:userId/fav-sites'], isAdmin);

app.get('/:userId/colors', (req, res, next) => {
  res.send(publicData.colors);
});

app.get('/:userId/numbers', (req, res, next) => {
  res.send(publicData.numbers);
});

app.get('/:userId/phone-numbers', (req, res, next) => {
  res.send(secretData.coolPhoneNumbers);
});

app.get('/:userId/fav-sites', (req, res, next) => {
  res.send(secretData.favSites);
});

///////////////////////////////////////////////////////////////////////////
//EXPRESS MIDDLEWARE CODE CHALLENGES 9 ////////////////////////////////////
//////////////////////////////////////////////////////////////////////////

const express = require('express');
const appleRouter = express.Router();

const apples = {
  mcintosh: {
    description: 'Classic, juicy, bright',
    priceRange: 'medium',
    color: 'green and red'
  },
  honeycrisp: {
    description: 'Crisp, sweet!',
    priceRange: 'pricey',
    color: 'red and yellow'
  },
  goldenDelicious: {
    description: 'rich, custardy',
    priceRange: 'cheap',
    color: 'yellow'
  }
}

// Finish the appleRouter.param call:

appleRouter.param('variety', (req, res, next, variety) => {
  if (!apples[variety]) {
    res.status(404).send();
  } else {
    req.variety = apples[variety];
    next();
  }
});

appleRouter.get('/:variety/description', (req, res, next) => {
  res.send(req.variety.description);
});

appleRouter.get('/:variety/price-range', (req, res, next) => {
  res.send(req.variety.priceRange);
});

appleRouter.get('/:variety/color', (req, res, next) => {
  res.send(req.variety.color);
});


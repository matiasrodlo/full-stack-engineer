
const express = require('express')
const app = express()

/////////////////////////////////////////////////////////////////////////

const express = require('express');

const app = express();

const PORT = process.env.PORT || 4001;

// Add your code below:
app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});

/////////////////////////////////////////////////////////////////////////

const express = require('express');
const app = express();

const PORT = process.env.PORT || 4001;

const sausageTypes = ['bratwurst', 'andouille', 'chorizo', 'boudin', 'kielbasa'];

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

app.get('/sausages', (req, res, next) => {
  res.send(sausageTypes);
});

////////////////////////////////////////////////////////////////////////

const express = require('express');
const app = express();

const PORT = process.env.PORT || 4001;

const buildingMaterials = {
  wood: ['plywood', '2x4s', 'cedar shingles'],
  metal: ['steel girders', 'wall studs', 'rebar'],
};

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

app.get('/metals', (req, res, next) => {
    res.send(buildingMaterials.metal);
});

/////////////////////////////////////////////////////////////////////////

const express = require('express');
const app = express();

const PORT = process.env.PORT || 4001;

const battlefields = {
  fortSumter: {
    state: 'SC',
  },
  manassas: {
    state: 'VA',
  },
  gettysburg: {
    state: 'PA',
  },
  antietam: {
    state: 'MD',
  }
}

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

app.get('/battlefields/:name', (req, res, next) => {
  const battlefieldName = req.params.name;
    if (battlefieldName !== -1) {
    battlefields.splice(battlefieldName, 1);
    res.status(204).send();
  } else {
    res.status(404).send();
  }
});

//////////////////////////////////////////////////////////////////////////

const express = require('express');
const app = express();

const PORT = process.env.PORT || 4001;

const currencies = {
  diram: {
    countries: ['UAE', 'Morocco'],
  },
  real: {
    countries: ['Brazil'],
  },
  dinar: {
    countries: ['Algeria', 'Bahrain', 'Jordan', 'Kuwait'],
  },
  vatu: {
    countries: ['Vanuatu'],
  },
  shilling: {
    countries: ['Tanzania', 'Uganda', 'Somalia', 'Kenya'],
  },
};

// Update an expression
currenciesRouter.put('/currencies/:name/countries', (req, res, next) => {
  const currenciesIndex = getIndexById(req.params.id, currencies);
  if (currenciesIndex !== -1) {
    updateElement(req.params.id, req.query, currencies);
    res.send(currencies[currenciesIndex]);
  } else {
    res.status(404).send();
  }
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});


///////////////////////////////////////////////////////////////////////////////

const express = require('express');
const app = express();

const PORT = process.env.PORT || 4001;

const soups = ['gazpacho', 'borscht', 'primordial', 'avgolemono', 'laksa'];

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

soupsRouter.put('/soups', (req, res, next) => {
  const receivedSoups = createElement('soups', req.query);
  if (receivedSoups) {
    soups.push(receivedSoups);
    res.status(201).send(receivedSoups);
  } else {
    res.status(400).send();
  }
});

///////////////////////////////////////////////////////////////////////////

const express = require('express');
const app = express();

const PORT = process.env.PORT || 4001;

const puddingFlavors = ['chocolate', 'banana', 'butterscotch', 'pistachio'];

const findPuddingIndex = (name) => {
  return puddingFlavors.indexOf(name);
}

const deletePuddingAtIndex = (index) => {
  puddingFlavors.splice(index, 1);
}

// Your code here!
app.delete('/puddings/:flavor', (req, res, next) => {
  const findPuddingIndex = getIndexById(req.params.id, puddingFlavors);
  if (findPuddingIndex !== -1) {
    animals.splice(findPuddingIndex, 1);
    res.status(204).send();
  } else {
    res.status(404).send();
  }
});


app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

////////////////////////////////////////////////////////////////////////////

const express = require('express');
const app = express();

const PORT = process.env.PORT || 4001;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

const pastas = ['agnolotti', 'cavatelli', 'gemelli', 'tortellini'];

app.get('/pastas', (req, res, next) => {
  res.send(pastas);
});

const sauceRouter = express.Router();
// Add your code here:
app.use('/sauces', sauceRouter);

// Get all animals
app.get('/animals', (req, res, next) => {
  res.send(animals);
});

const sauces = ['carbonara', 'primavera', 'bolognese', 'puttanesca', 'fra diavolo']

sauceRouter.get('/', (req, res, next) => {
  res.send(sauces);
});

//////////////////////////////////////////////////////////////////////////////

const express = require('express');
const app = express();

const PORT = process.env.PORT || 4001;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

const mountains = ['denali', 'olympus', 'kilimanjaro', 'matterhorn'];
const mountainRanges = ['alps', 'andes', 'himalayas', 'rockies'];

const mountainsRouter = require('expressions.js');
app.use('/mountains', mountainsRouter);

const mountainRangesRouter = require('./expressions.js');
app.use('/mountain-ranges', mountainRangesRouter);
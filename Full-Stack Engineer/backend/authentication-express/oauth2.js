/////////////////////////////////////////////////////
//Oauth2-server/////////////////////////////
////////////////////////////////////////////////////

const express = require('express');
const path = require('path');
// Import oauth2-server here
const OAuth2Server = require('oauth2-server');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

const PORT = 4001;

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, 'public/home.html'));
})
app.get('/login', (req, res)=>{
    res.sendFile(path.join(__dirname, 'public/login.html'));
})

app.get('/secret', (req, res)=>{
    res.send('Welcome to the secret area.');
})

app.listen(PORT, ()=>console.log(`Listening on port ${PORT}`));

/////////////////////////////////////////////////////
//Creating an OAuth/////////////////////////////////
////////////////////////////////////////////////////


const express = require('express');
const path = require('path');
const OAuth2Server = require('oauth2-server');

const app = express();

// Create oauth instance here

const oauth = new OAuth2Server({
  model: require('./model.js'),
  allowBearerTokensInQueryString: true,
  accessTokenLifetime: 60 * 60
})

app.use(express.json());
app.use(express.urlencoded({extended: true}));

const PORT = 4001;

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, 'public/home.html'));
})
app.get('/login', (req, res)=>{
    res.sendFile(path.join(__dirname, 'public/login.html'));
})

app.get('/secret', (req, res)=>{
    res.send('Welcome to the secret area.');
})

app.listen(PORT, ()=>console.log(`Listening on port ${PORT}`));

/////////////////////////////////////////////////////
//Registering Client to Application/////////////////
////////////////////////////////////////////////////


module.exports = {
    confidentialClients: [{
      clientId: 'codecademy',
      clientSecret: 'codec@demy',
      grants: [
        'client_credentials'
      ]
    }],
      tokens: []
  
  }
  
/////////////////////////////////////////////////////
//getClient()////////////////////////////////////////
////////////////////////////////////////////////////

  let db = require("./db.js");

// Write getClient() function here
const getClient = (clientId, clientSecret) => {
  let confidentialClients = db.confidentialClients.filter((client) => {
    return client.clientId === clientId && client.clientSecret === clientSecret;
  });
  return confidentialClients[0];
};

module.exports = {
  getClient: getClient
}

/////////////////////////////////////////////////////
//saveToken()////////////////////////////////////////
////////////////////////////////////////////////////

let db = require('./db.js');

// Write getClient() function here
const getClient = (clientId, clientSecret) => {
  let confidentialClients = db.confidentialClients.filter((client) => {
    return client.clientId === clientId && client.clientSecret === clientSecret
  });
  return confidentialClients[0];
}

// Write saveToken() function here
const saveToken = (token, client, user) => {
  token.client = {
    id: client.clientId
  }
  token.user = {
    username: user.username
  }
  db.tokens.push(token);
  return token;
}

module.exports = {
  saveToken: saveToken
}

// Export saveToken() function here
module.exports = {
  getClient: getClient
}

/////////////////////////////////////////////////////
//getUserFromClient//////////////////////////////////
////////////////////////////////////////////////////

let db = require('./db.js');

const getClient = (clientId, clientSecret) => {
  let confidentialClients = db.confidentialClients.filter((client) => {
    return client.clientId === clientId && client.clientSecret === clientSecret
  });
  return confidentialClients[0];
}

const saveToken = (token, client, user) => {
  token.client = {
    id: client.clientId
  }
  token.user = {
    username: user.username
  }
  db.tokens.push(token);
  return token;
}


// Write getUserFromClient() function here
const getUserFromClient = (client) => {
  return {}
}
// Export getUserFromClient() function here
module.exports = {
  getClient: getClient,
  saveToken: saveToken,
  getUserFromClient: getUserFromClient
}
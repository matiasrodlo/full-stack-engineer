////////////////////////////////////////////////////
//Installing express-session///////////////////////
//////////////////////////////////////////////////

const express = require("express");
const app = express();

// Import express-session below:
const session = require("express-session")

const PORT = process.env.PORT || 4001;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

////////////////////////////////////////////////////
//express-session Configuration/////////////////////
//////////////////////////////////////////////////

const express = require("express");
const app = express();
const session = require("express-session");

const PORT = process.env.PORT || 4001;

// Create your session middleware below:
app.use(
  session({
    secret: "D53gxl41G",
    resave: false,
    saveUninitialized: false,
  })
);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

////////////////////////////////////////////////////
//Storing Session Data/////////////////////////////
//////////////////////////////////////////////////

const express = require("express");
const app = express();
const session = require("express-session");
app.set('trust proxy', 1)
const PORT = process.env.PORT || 4001;
// Create your store below:
const store = new session.MemoryStore();

app.use(
  session({
    secret: "D53gxl41G",
    resave: false,
    saveUninitialized: false,
    store
  })
);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

////////////////////////////////////////////////////
//Cookies//////////////////////////////////////////
//////////////////////////////////////////////////

const express = require("express");
const app = express();
const session = require("express-session");
app.set("trust proxy", 1);
const PORT = process.env.PORT || 4001;
const store = new session.MemoryStore();

app.use(
  session({
    secret: "D53gxl41G",
    // Add the cookie property below:
    cookie: { maxAge: 172800000, secure: true, sameSite: "none" },
    resave: false,
    saveUninitialized: false,
    store
  })
);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

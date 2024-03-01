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

////////////////////////////////////////////////////
//Logging In///////////////////////////////////////
//////////////////////////////////////////////////

const express = require("express");
const app = express();
const session = require("express-session");
const store = new session.MemoryStore();
const db = require("./db");
const PORT = process.env.PORT || 4001;

app.set("trust proxy", 1);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.use(
  session({
    secret: "f4z4gs$Gcg",
    cookie: { maxAge: 300000000, secure: true, sameSite: "none" },
    saveUninitialized: false,
    resave: false,
    store,
  })
);

app.get("/login", (req, res) => {
  res.render("login");
});

// POST request for logging in
app.post("/login", (req, res) => {
  const { username, password } = req.body;
  db.users.findByUsername(username, (err, user) => {
    if (!user) return res.status(403).json({ msg: "No user found!" });
    if (user.password === password) {
      // Add your authenticated property below:
  req.session.authenticated = true;

      // Add the user object below:
  req.session.user= {
    username,
    password,
  }
      // Log the session below:
console.log(req.session);

      res.redirect("/shop");
    } else {
      res.status(403).json({ msg: "Bad Credentials" });
    }
  });
});

app.get("/shop", (req, res) => {
  res.render("shop", { user: 'Guest' });
});


app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

////////////////////////////////////////////////////
//Accessing Session Data////////////////////////////
//////////////////////////////////////////////////

const express = require("express");
const app = express();
const session = require("express-session");
const store = new session.MemoryStore();
const db = require("./db");
const PORT = process.env.PORT || 4001;

app.set("trust proxy", 1)
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.use(
  session({
    secret: "f4z4gs$Gcg",
    cookie: { maxAge: 300000000, secure: true, sameSite: "none" },
    saveUninitialized: false,
    resave: false,
    store,
  })
);

function ensureAuthentication(req, res, next) {
  // Complete the if statement below:
  if (req.session.authenticated) {
    return next();
  } else {
    res.status(403).json({ msg: "You're not authorized to view this page" });
  }
}

// Add your ensureAuthentication middleware below:
app.get("/shop", ensureAuthentication, (req, res) => {
  // Send the user object to the view page:
  res.render("shop", { user: req.session.user });
});

app.get("/login", (req, res) => {
  res.render("login");
});

// POST request for logging in
app.post("/login", (req, res) => {
  const { username, password } = req.body;
  db.users.findByUsername(username, (err, user) => {
    if (!user) return res.status(403).json({ msg: "No user found!" });
    if (user.password === password) {
      req.session.authenticated = true;
      req.session.user = {
        username,
        password,
      };
      res.redirect("/shop");
    } else {
      res.status(403).json({ msg: "Bad Credentials" });
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

////////////////////////////////////////////////////
//Configuring Passport.js//////////////////////////
//////////////////////////////////////////////////

const express = require("express");

const app = express();
// Import the passport library below:
const passport = require("passport");

// Import the passport-local library below:
const LocalStrategy = require("passport-local").Strategy;

const session = require("express-session");
const PORT = process.env.PORT || 5000;

app.use(
  session({
    secret: "secret-key",
    resave: false,
    saveUninitialized: false,
  })
);

// Add the middleware to initialize the passport library below:
  app.use(passport.initialize());

// Add the middleware to implement a session with passport below:
  app.use(passport.session());

app.get("/", (req, res) => {
  res.send("Hello from the homepage!");
});

app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});

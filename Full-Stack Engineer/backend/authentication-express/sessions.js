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

////////////////////////////////////////////////////
//Passport's Local Strategy/////////////////////////
////////////////////////////////////////////////////

const express = require("express");
const app = express();
const passport = require("passport");
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

app.use(passport.initialize());
app.use(passport.session());

// Add your passport local strategy below:

passport.use(
  new LocalStrategy(function (username, password, done) {
    db.users.findByUsername(username, (err, user) => {
      // If there's an error in db lookup,
      // return err callback function
      if (err) return done(err);

      // If user not found,
      // return null and false in callback
      if (!user) return done(null, false);

      // If user found, but password not valid,
      // return err and false in callback
      if (user.password != password) return done(null, false);

      // If user found and password valid,
      // return the user object in callback
      return done(null, user);
    });
  })
);

app.get("/", (req, res) => {
  res.send("Hello from the homepage!");
});

app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});

////////////////////////////////////////////////////
//Serializing and Deserializing Users///////////////
////////////////////////////////////////////////////

const express = require("express");
const app = express();
const passport = require("passport");
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

app.use(passport.initialize());
app.use(passport.session());

// Complete the serializeUser function below:
passport.serializeUser((user, done) => {
  done(null, user.id);
  // Look up user id in database. 

});

// Complete the deserializeUser function below:
passport.deserializeUser((id, done) => {
  db.users.findById(id, function (err, user) {
    if (err) return done(err); 
    done(null, user);
  });
});

passport.use(
  new LocalStrategy(function (username, password, done) {
    db.users.findByUsername(username, (err, user) => {
      if (err) {
        return done(err);
      }
      if (!user) {
        return done(null, false);
      }
      if (user.password != password) {
        return done(null, false);
      }
      return done(null, user);
    });
  })
);

app.get("/", (req, res) => {
  res.send("Hello from the homepage!");
});

app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});

/////////////////////////////////////////////////////
//Logging In////////////////////////////////////////
////////////////////////////////////////////////////

const express = require("express");
const app = express();
const session = require("express-session");
const store = new session.MemoryStore();
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const db = require("./db");
const PORT = process.env.PORT || 4001;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.use(
  session({
    secret: "secret-key",
    resave: false,
    saveUninitialized: false,
    store,
  })
);

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  // Look up user id in database.
  db.users.findById(id, function (err, user) {
    if (err) {
      return done(err);
    }
    done(null, user);
  });
});

passport.use(
  new LocalStrategy(function (username, password, cb) {
    db.users.findByUsername(username, function (err, user) {
      if (err) {
        return cb(err);
      }
      if (!user) {
        return cb(null, false);
      }
      if (user.password != password) {
        return cb(null, false);
      }
      return cb(null, user);
    });
  })
);

app.get("/login", (req, res) => {
  res.render("login");
});

app.get("/profile", (req, res) => {
  // Pass user object stored in session to the view page:
  res.render("profile", { user: req.user});
  res.render("profile");});

// Add the passport middleware below:
app.post(
  "/login", passport.authenticate("local", { failureRedirect: "/login" }),
  (req, res) => {
    res.redirect("profile");
  }
);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

/////////////////////////////////////////////////////
//User Registration II//////////////////////////////
////////////////////////////////////////////////////

const express = require("express");
const app = express();
const session = require("express-session");
const store = new session.MemoryStore();
const db = require("./db");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const PORT = process.env.PORT || 4001;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.use(
  session({
    secret: "f4z4gs$Gcg",
    cookie: { maxAge: 300000000, secure: false },
    saveUninitialized: false,
    resave: false,
    store,
  })
);

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  db.users.findById(id, function (err, user) {
    if (err) {
      return done(err);
    }
    done(null, user);
  });
});

passport.use(
  new LocalStrategy(function (username, password, cb) {
    db.users.findByUsername(username, function (err, user) {
      if (err) {
        return cb(err);
      }
      if (!user) {
        return cb(null, false);
      }
      if (user.password != password) {
        return cb(null, false);
      }
      return cb(null, user);
    });
  })
);

app.get("/login", (req, res) => {
  res.render("login");
});

app.get("/profile", (req, res) => {
  res.render("profile", { user: req.user });
});

app.post(
  "/login",
  passport.authenticate("local", { failureRedirect: "/login" }),
  (req, res) => {
    res.redirect("profile");
  }
);

app.get("/register", (req, res) => {
  res.render("register");
});

// POST REGISTER:
app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  // Create new user:
  const newUser = await db.users.createUser({ username, password });
  // Add if/else statement with the new user as the condition:
  if (newUser) {
    res.status(201).json({
      msg: "User created!",
      newUser
    });
  } else {
res.status(500).json({ msg: "Unable to create user!"});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

/////////////////////////////////////////////////////
//Logout//////////////////////////////
////////////////////////////////////////////////////

const express = require("express");
const app = express();
const session = require("express-session");
const store = new session.MemoryStore();
const db = require("./db");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const PORT = process.env.PORT || 4001;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.use(
  session({
    secret: "f4z4gs$Gcg",
    cookie: { maxAge: 300000000, secure: false },
    saveUninitialized: false,
    resave: false,
    store,
  })
);

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  db.users.findById(id, function (err, user) {
    if (err) {
      return done(err);
    }
    done(null, user);
  });
});

passport.use(
  new LocalStrategy(function (username, password, cb) {
    db.users.findByUsername(username, function (err, user) {
      if (err) {
        return cb(err);
      }
      if (!user) {
        return cb(null, false);
      }
      if (user.password != password) {
        return cb(null, false);
      }
      return cb(null, user);
    });
  })
);

// Complete the logut handler below:
app.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/login");
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.post(
  "/login",
  passport.authenticate("local", { failureRedirect: "/login" }),
  (req, res) => {
    res.redirect("profile");
  }
);

app.get("/profile", (req, res) => {
  res.render("profile", { user: req.user });
});

app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  const newUser = await db.users.createUser({ username, password });
  if (newUser) {
    res.status(201).json({
      msg: "New user created!",
      newUser,
    });
  } else {
    res.status(500).json({ msg: "Unable to create user" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

/////////////////////////////////////////////////////
//bcrypt////////////////////////////////////////////
////////////////////////////////////////////////////

const bcrypt = require("bcrypt");

// Create password hashing function below:
const passwordHash = async (password, saltRounds) => {
  try {
    const salt = await bcrypt.genSalt(saltRounds);
    const hash = await bcrypt.hash(password, salt);
  return hash
  } catch (err) {
    console.log(err)
  }
    return null;

};

/////////////////////////////////////////////////////
//Verifying Passwords///////////////////////////////
////////////////////////////////////////////////////

const bcrypt = require("bcrypt");

// Create your password comparison function below:

const comparePasswords = async (password, hash) => {
  try {
    const matchFound = await bcrypt.compare(password, hash);
    return matchFound;
  } catch (err) {
    console.log(err);
  }
  return false;
};

// Import packages
const express = require("express");
const app = express();
const session = require("express-session");
const passport = require("passport");

// App config
app.set("trust proxy", 1);
const PORT = process.env.PORT || 4001;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
app.set("view engine", "ejs");

// Import Passport config
require("./config/passport");

// Session Config
app.use(session({
  secret: 'your_secret_key', // Add your own secret key
  resave: false,
  saveUninitialized: true
}));

// Passport middleware initialization
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use(require("./routes/index.routes"));

app.get("/", (req, res) => {
  const user = req.user || "Guest"; // Check if user is authenticated
  res.render("home", { user });
});


app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});

app.get("/", (req, res) => {
  const user = req.user || "Guest"; // Check if user is authenticated
  res.render("home", { user });
});

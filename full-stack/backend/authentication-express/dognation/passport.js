const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");
const helper = require("../helpers/helper");

// Set up the Passport strategy:
passport.use(
  new LocalStrategy(
    {
      usernameField: 'username', // Customize if your field names differ
      passwordField: 'password',
    },
    async (username, password, done) => {
      try {
        const user = await helper.findByUsername(username);
        if (!user) {
          return done(null, false, { message: 'Incorrect username.' });
        }
        const matchedPassword = await bcrypt.compare(password, user.password);
        if (matchedPassword) {
          return done(null, user); // Return done() with no error and the user object
        } else {
          return done(null, false, { message: 'Incorrect password.' }); // No user found, no error
        }
      } catch (err) {
        return done(err); // Return the done() function with the err object
      }
    }
  )
);

// Serialize a user
passport.serializeUser((user, done) => {
  done(null, user.id);
});
// Deserialize a user
passport.deserializeUser((id, done) => {
  helper.findById(id, (err, user) => {
    if (err) {
      return done(err); // Return the done() function with the err object
    }
    done(null, user);
  });
});

helper.findById = (id, callback) => {
  // Logic to find user by id
  User.findById(id, (err, user) => {
    if (err) {
      return callback(err); // Return the done() function with the err object
    }
    callback(null, user);
  });
};
//login
// Log In User:
router.post("/login", passport.authenticate('local', {
  successRedirect: '/', // Redirect to the home page if authentication is successful
  failureRedirect: '/login', // Redirect to the login page if authentication fails
}));

// Log out user:
router.get("/logout", (req, res) => {
  req.logout(); // Passport.js function to log out the user
  res.redirect("/login");
});

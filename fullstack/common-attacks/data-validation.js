const express = require("express");
const session = require("express-session");
// helmet works well in the real world,
// but we need to commment it out here :)
// const helmet = require("helmet");
// Require the 'check' method from express-validator below:
const { check } = require("express-validator");
const fs = require("fs");

const PORT = process.env.PORT || 4001;
const app = express();

let reviews = [];

app.use(express.static("public"));
app.use(
  session({
    secret: "my-secret",
    resave: true,
    saveUninitialized: true,
    cookie: {
      httpOnly: true,
      secure: true
    },
  })
);

// helmet works well in the real world,
// but we need to commment it out here :)
// app.use(helmet());

app.get("/", (req, res) => {
  if (req.query.newReview) reviews.push(req.query.newReview);
  const formattedReviews = reviews
    .map((review) => `<dt>User</dt><dd>${review}</dd>`)
    .join(" ");
  const template = fs.readFileSync("./views/index.html", "utf8");
  const view = template.replace("$reviews$", formattedReviews);
  res.send(view);
});

// Endpoint in development
app.post("/login", [
  // Add the middleware to validate email and password length below:
  // username must be an email
  check('email').isEmail(),
  // password must be at least 5 chars long
  check('password').isLength({ min: 5 }),
],(req, res) => {

  // res.render("dashboard", { email, password });
});

app.listen(PORT, () =>
  console.log(`The server is listening at port: http://localhost:${PORT}`)
);

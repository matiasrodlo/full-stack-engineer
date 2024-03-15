const express = require('express');
const partials = require('express-partials');
const path = require('path');
// Require Validator module here
const validator = require('validator')

const app = express();

const PORT = 4001;

app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "ejs");
app.use(express.static('public'));
app.use(partials());


app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, "/public")));


app.get('/', (req, res) => {
  res.render('form', { emailStatus: null })
})

app.post('/submit', 
  (req, res) => {
    const response = {}

    res.json({message: response})
});


app.listen(process.env.PORT || PORT, () => console.log(`Listening on http://localhost:${PORT}`) );

/////////////////////////////////////////////////////////////////////////////
// Input Sanitization: Validating Forms /////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////

const express = require('express');
const partials = require('express-partials');
const path = require('path');
const validator = require('validator');
const app = express();

const PORT = 4001;

app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "ejs");
app.use(express.static('public'));
app.use(partials());

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, "/public")));


app.get('/', (req, res) => {
  res.render('form', { emailStatus: null })
})

app.post('/submit', 
  (req, res) => {
    const response = {
      emailValid: validator.isEmail(req.body.email),// Check if the submitted email is valid
      passwordValid: validator.isLength(req.body.password, { min:5, max: 10})// Check if password is a valid length
    }

    res.json({message: response})
});


app.listen(process.env.PORT || PORT, () => console.log(`Listening on http://localhost:${PORT}`) );

///////////////////////////////////////////////////////////////////////////////
//Data Sanitization///////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////

const express = require('express');
const partials = require('express-partials');
const path = require('path');
const validator = require('validator');

const app = express();

const PORT = 4001;

app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "ejs");
app.use(partials());


app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, "/public")));



app.get('/', (req, res) => {
  res.render('form', { emailStatus: null })
})

app.post('/email', 
  (req, res) => {
    const response = {
      normalizedEmail: validator.normalizeEmail(req.body.emailForm) // Normalize email here
    }

    res.json({message: response})
});

app.post('/date', 
  (req, res) => {
    const response = {
      sanitizedDate: validator.toDate(req.body.dateForm)// Sanitize date here 
    }

    res.json({message: response})
});

app.post('/escape', 
  (req, res) => {
    const response = {
      escapedValue: validator.escape(req.body.escapeForm)// Escape form values here 
    }

    res.json({message: response})
});

app.listen(process.env.PORT || PORT, () => console.log(`Listening on http://localhost:${PORT}`) );

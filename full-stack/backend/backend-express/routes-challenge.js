
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


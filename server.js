require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// INIT SERVER:
const app = express();

// INIT MIDDLEWARE:

// log requests(for development)
app.use((req, res, next) => {
  console.log(`${req.method} request on ${req.url}`);
  next();
});

//cors middleware
app.use(cors());

//body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// DEFINE ROUTES:
app.get('/', (req, res) => {
  res.send('hello')
});

// LISTEN TO PORT
const PORT = process.env.PORT || 4444;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
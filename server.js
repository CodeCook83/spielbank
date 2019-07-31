const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express()

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const games = require('./routes/api/games');
const users = require('./routes/api/users');

// Db config
const db = encodeURI(require('./config/keys').MONGO_URI);

// Connect to MongoDB
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log(err));

app.get('/', (req, res) => {
  res.send('Spielbank');
});

// Use routes
app.use('/api/games', games)
app.use('/api/users', users)

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
})
const express = require('express');
const connectDB = require('./config/db');
const path = require('path');
const app = express();

connectDB(); // connect to local mongodb

app.use(express.json({ extended: false })); // init middleware

// app.get('/', async (req, res) =>
//   await res.json({ msg: 'Welcome to the contact keeper API 🍺 🎲 🚀' })
// );

app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));



// SERVE STATIC ASSETS IN PROD
if (process.env.NODE_ENV === 'production') {
  // SET STATIC FOLDER
  app.use(express.static('client/build'));
  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  );
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server listening on ${PORT}`));

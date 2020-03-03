const express = require('express');
const connectDB = require('./config/db');
const path = require('path');

const app = express();

const routes = require('./routes');

//Connect database
connectDB();

// Initialize middleware
app.use(express.json({ extended: false }));

app.use(routes);

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

// Heroku gets the variable from process.env.PORT
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

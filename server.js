const express = require('express');
const connectDB = require('./config/db');

const app = express();

const routes = require('./routes');

//Connect database
connectDB();

// Initialize middleware
app.use(express.json({ extended: false }));

app.use(routes);

app.get('/', (req, res) => res.send('API Started'));

// Heroku gets the variable from process.env.PORT
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

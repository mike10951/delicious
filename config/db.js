const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

// Connect to the Mongo DB
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    });
    console.log('MongoDB connected...');
  } catch (err) {
    console.error(err.message);
    // Exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;

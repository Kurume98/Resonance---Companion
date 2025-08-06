const mongoose = require('mongoose');
const dotenv = require('dotenv');

// 🔐 Load Sacred Environment Keys
dotenv.config();

// 🌉 Connect to Mongo Scrollbook
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`📚 Mongo Scrollbook Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`❌ Mongo Scroll Connection Failed: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
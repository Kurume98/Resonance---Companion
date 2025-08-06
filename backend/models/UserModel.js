const mongoose = require('mongoose');

// 🔐 Blueprint of the Scroll Bearer
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true, // Clean scroll edge
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true, // Bring scroll into humility
  },
  password: {
    type: String,
    required: true, // Seal key for access
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('User', userSchema);
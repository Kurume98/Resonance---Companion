// 📕 ActivationModel — Scroll Phase Container
const mongoose = require('mongoose');

// 🔹 Schema of Scroll Activation
const activationSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to the Scroll Bearer
    required: true,
  },
  phase: {
    type: String,
    required: true, // e.g., "planting", "watering", "pruning", "harvest"
  },
  timestamp: {
    type: Date,
    default: Date.now, // Defaults to the moment the scroll was activated
  },
});

// 🔸 Export Activation Model
module.exports = mongoose.model('Activation', activationSchema);
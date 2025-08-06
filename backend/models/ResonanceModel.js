const mongoose = require('mongoose');

// 📜 Schema of Scroll Resonance
const resonanceSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  emotion: {
    type: String,
    required: true,
    enum: ['joy', 'sorrow', 'clarity', 'confusion', 'peace', 'alert', 'stillness', 'expansion'],
  },
  intensity: {
    type: Number,
    min: 0,
    max: 10,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
  scrollPhase: {
    type: String,
    enum: ['planting', 'watering', 'pruning', 'harvest'],
    default: 'planting',
  },
});

// 🔁 Export the Resonance Scroll
module.exports = mongoose.model('Resonance', resonanceSchema);
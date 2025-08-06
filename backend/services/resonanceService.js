const Resonance = require('../models/ResonanceModel');

// 🔊 Echo a New Resonance Frequency
const createResonance = async (data) => {
  const resonance = new Resonance({
    ...data,
    timestamp: data.timestamp || new Date(),
  });
  return await resonance.save();
};

// 📡 Retrieve Resonances by Scroll Bearer
const getResonancesByUser = async (userId) => {
  return await Resonance.find({ userId }).sort({ timestamp: -1 });
};

module.exports = {
  createResonance,
  getResonancesByUser,
};
// 🎼 Scroll Frequency Channel: Resonance Controller
const Resonance = require('../models/ResonanceModel');

// 🎙️ Record New Resonance Entry
const createResonance = async (req, res) => {
  try {
    const { userId, emotion, intensity, notes, timestamp } = req.body;

    const resonance = new Resonance({
      userId,
      emotion,
      intensity,
      notes,
      timestamp: timestamp || new Date(),
    });

    await resonance.save();

    res.status(201).json({
      message: 'Resonance Recorded',
      resonance,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Resonance Creation Failed',
      error,
    });
  }
};

// 🔍 Retrieve Resonance Logs for Scroll Bearer
const getResonanceByUser = async (req, res) => {
  try {
    const userId = req.params.userId;

    const logs = await Resonance.find({ userId }).sort({ timestamp: -1 });

    if (!logs || logs.length === 0) {
      return res.status(404).json({ message: 'No Resonance Data Found' });
    }

    res.status(200).json({
      message: 'Resonance Logs Retrieved',
      logs,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Failed to Retrieve Resonance Logs',
      error,
    });
  }
};

module.exports = {
  createResonance,
  getResonanceByUser,
};
const Activation = require('../models/ActivationModel');

const createActivation = async (req, res) => {
  try {
    const { userId, phase, timestamp } = req.body;

    const activation = new Activation({
      userId,
      phase,
      timestamp: timestamp || new Date(),
    });

    await activation.save();

    res.status(201).json({
      message: 'Scroll Activation Recorded',
      activation,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Failed to Record Activation',
      error,
    });
  }
};
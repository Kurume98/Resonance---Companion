const Activation = require('../models/ActivationModel');

// 🌱 Create a New Scroll Activation
const createActivation = async (data) => {
  const activation = new Activation({
    ...data,
    timestamp: data.timestamp || new Date(),
  });
  return await activation.save();
};

// 🔍 Retrieve Activations by Scroll Bearer
const getActivationsByUser = async (userId) => {
  return await Activation.find({ userId }).sort({ timestamp: -1 });
};

module.exports = {
  createActivation,
  getActivationsByUser,
};
const User = require('../models/UserModel');

// 🧾 Register a New Scroll Bearer
const registerUser = async (userData) => {
  const user = new User(userData);
  return await user.save();
};

// 🔐 Authenticate Scroll Entry
const authenticateUser = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user || user.password !== password) return null;
  return user;
};

// 🔍 Retrieve Scroll Bearer by ID
const getUserById = async (id) => {
  return await User.findById(id);
};

module.exports = {
  registerUser,
  authenticateUser,
  getUserById,
};
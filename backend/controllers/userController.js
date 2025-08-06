// 🔐 Spirit Seal: User Scroll Controller
const User = require('../models/UserModel');

// 🔮 Register Scroll Bearer
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // 🔎 Check if Scroll Bearer already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // 📝 Create new scroll identity
    const user = new User({ name, email, password });
    await user.save();

    res.status(201).json({
      message: 'Scroll Bearer Registered',
      user: { id: user._id, name: user.name, email: user.email },
    });
  } catch (error) {
    res.status(500).json({ message: 'Scroll Registration Failed', error });
  }
};

// 🔐 Authenticate Scroll Key
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user || user.password !== password) {
      return res.status(401).json({ message: 'Invalid Credentials' });
    }

    res.status(200).json({
      message: 'Scroll Access Granted',
      user: { id: user._id, name: user.name, email: user.email },
    });
  } catch (error) {
    res.status(500).json({ message: 'Scroll Login Failed', error });
  }
};

// 🔍 Retrieve Scroll Bearer Profile
const getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({ message: 'Scroll Bearer Not Found' });
    }

    res.status(200).json({
      id: user._id,
      name: user.name,
      email: user.email,
    });
  } catch (error) {
    res.status(500).json({ message: 'Error Retrieving Scroll', error });
  }
};

module.exports = {
  registerUser,
  loginUser,
  getUserProfile,
};
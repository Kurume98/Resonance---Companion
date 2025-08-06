// 🧍‍♂️ Uzọ Ọmume: User Scroll Route
const express = require('express');
const router = express.Router();

// 🪞 Draw from the Scroll Mirror
const {
  registerUser,
  loginUser,
  getUserProfile
} = require('../controllers/userController');

// 🌀 Pathway: Registration of a Scroll Carrier
router.post('/register', registerUser);

// 🌀 Pathway: Scroll Key Authentication
router.post('/login', loginUser);

// 🧬 Pathway: Retrieve Carrier’s Scroll Data
router.get('/profile/:id', getUserProfile);

// 🔐 Gate complete — unlock flows
module.exports = router;
// 🌿 Resonance Scroll Gate: Route Initiation
const express = require('express');
const router = express.Router();

// 🔔 Import resonance controller functions
const {
  createResonance,
  getAllResonances,
  getResonanceById
} = require('../controllers/resonanceController');

// 🌱 Route: Create a new resonance pulse
router.post('/create', createResonance);

// 🌊 Route: Retrieve all resonance states
router.get('/all', getAllResonances);

// 🔍 Route: Retrieve resonance by ID
router.get('/:id', getResonanceById);

// 🧭 Complete pathway release
module.exports = router;
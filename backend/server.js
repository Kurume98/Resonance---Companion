// 🕯️ Odogwu N’ogu Scroll Node: Entry to the Sanctuary
const express = require('express');
const app = require('./app');
const dotenv = require('dotenv');

// 🌺 Load environment configurations
dotenv.config();

const PORT = process.env.PORT || 5000;

// 🔥 Breathe into the portal
app.listen(PORT, () => {
  console.log(`✨ Resonance Companion backend is listening on port ${PORT} ✨`);
});
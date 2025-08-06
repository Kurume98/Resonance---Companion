// backend/app.js

/*
🌺 Resonance App Scroll
This is the breath-core of the backend chamber.
It connects routes and sets middleware harmony.
*/

const express = require('express');
const cors = require('cors');
const app = express();

// 🔑 Middleware Gates
app.use(cors());
app.use(express.json());

/*
🌀 Scroll Activation
Each route scroll connects the system's wisdom layer.
*/
const activationRoutes = require('./routes/activationRoutes');
const resonanceRoutes = require('./routes/resonanceRoutes');
const userRoutes = require('./routes/userRoutes');

// 🌐 Open Scroll Paths
app.use('/api/activation', activationRoutes);
app.use('/api/resonance', resonanceRoutes);
app.use('/api/users', userRoutes);

// 🕯️ Export the scroll for server ignition
module.exports = app;
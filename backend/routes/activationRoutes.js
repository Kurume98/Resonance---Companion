const express = require('express');
const { createActivation, getActivationsByUser } = require('../controllers/activationController');
const router = express.Router();

router.post('/activate', createActivation);
router.get('/user/:userId', getActivationsByUser);

module.exports = router;
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { authenticateToken } = require('../utils/authMiddleware');

// Signup Endpoint
router.post('/signup', userController.signup);

// Login Endpoint
router.post('/login', userController.login);

// Profile Endpoint (corrected)
router.get('/profile', authenticateToken, userController.profile);

module.exports = router;

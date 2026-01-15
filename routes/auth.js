const express = require('express');
const router = express.Router();

const userController = require('../controllers/auth');
const auth = require('../middlewares/auth');

// Auth
router.post('/signup', userController.signup);
router.post('/login', userController.login);

// Preferences
router.get('/preferences', auth, userController.getPreferences);
router.put('/preferences', auth, userController.updatePreferences);

module.exports = router;

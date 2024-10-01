const express = require('express');
const register = require('../controllers/user/register');
const show = require('../controllers/user/show');
const login = require('../controllers/user/login');
const authenticateToken = require('../middlewares/authenticateToken');

const router = express.Router();

router.post('/users/register', register);
router.get('/users/profile', authenticateToken, show);
router.post('/users/login', login);

module.exports = router;
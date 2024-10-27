const express = require('express');
const register = require('../controllers/user/register');
const show = require('../controllers/user/show');
const login = require('../controllers/user/login');
const get = require('../controllers/user/get')
const authenticateToken = require('../middlewares/authenticateToken');

const router = express.Router();

router.post('/users/register', register);
router.get('/users/profile', authenticateToken, show);
router.post('/users/login', login);
router.get('/users/:id', authenticateToken, get);

module.exports = router;
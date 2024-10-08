const express = require('express');
const list = require('../controllers/genre/list');
const authenticateToken = require('../middlewares/authenticateToken');

const router = express.Router();

router.get('/genres', authenticateToken, list);

module.exports = router;
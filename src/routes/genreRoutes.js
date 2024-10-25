const express = require('express');
const list = require('../controllers/genre/list');
const show = require('../controllers/genre/show');
const authenticateToken = require('../middlewares/authenticateToken');

const router = express.Router();

router.get('/genres', authenticateToken, list);
router.get('/genres/:id', authenticateToken, show); 

module.exports = router;
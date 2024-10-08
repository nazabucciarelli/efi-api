const express = require('express');
const list = require('../controllers/platform/list');
const authenticateToken = require('../middlewares/authenticateToken');

const router = express.Router();

router.get('/platforms', authenticateToken, list);

module.exports = router;
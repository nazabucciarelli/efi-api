const express = require('express');
const create = require('../controllers/purchase/create');
const list = require('../controllers/purchase/list');
const authenticateToken = require('../middlewares/authenticateToken');

const router = express.Router();

router.post('/purchases', authenticateToken, create);
router.get('/purchases', authenticateToken, list);

module.exports = router;
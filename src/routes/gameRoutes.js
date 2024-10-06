const express = require('express');
const create = require('../controllers/game/create');
const destroy = require('../controllers/game/destroy');
const list = require('../controllers/game/list');
const update = require('../controllers/game/update');
const authenticateToken = require('../middlewares/authenticateToken');

const router = express.Router();

router.post('/games', authenticateToken, create);
router.delete('/games/:id', authenticateToken, destroy);
router.get('/games', authenticateToken, list);
router.put('/games/:id', authenticateToken, update);

module.exports = router;
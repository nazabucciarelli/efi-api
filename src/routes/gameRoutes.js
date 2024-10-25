const express = require('express');
const create = require('../controllers/game/create');
const destroy = require('../controllers/game/destroy');
const list = require('../controllers/game/list');
const update = require('../controllers/game/update');
const show = require('../controllers/game/show');
const authenticateToken = require('../middlewares/authenticateToken');

const router = express.Router();

router.get('/games', authenticateToken, list);
router.get('/games/:id', authenticateToken, show);

router.post('/games', authenticateToken, create);
router.put('/games/:id', authenticateToken, update);

router.delete('/games/:id', authenticateToken, destroy);

module.exports = router;
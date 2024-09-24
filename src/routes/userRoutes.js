const express = require('express');
const create = require('../controllers/user/create');
const list = require('../controllers/user/list');
const show = require('../controllers/user/show');
const router = express.Router();

router.post('/users', create);
router.get('/users', list);
router.get('/users/:id', show);

module.exports = router;
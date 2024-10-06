const express = require("express");
const create = require("../controllers/review/create");
const list = require("../controllers/review/list");
const authenticateToken = require("../middlewares/authenticateToken");

const router = express.Router();

router.post("/reviews", authenticateToken, create);
router.get("/reviews/:gameId", authenticateToken, list);

module.exports = router;

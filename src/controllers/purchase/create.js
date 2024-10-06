const { Purchase, Game } = require("../../models");

async function create(req, res) {
  try {
    const { gameId } = req.body;
    const gameExist = await Game.findOne({ id: gameId });
    if (!gameExist) {
      return res
        .status(404)
        .json({ message: `Game with ID ${gameId} doesn't exist` });
    }
    let userAlreadyHasGame = await Purchase.findOne({
      userId: req.currentUser.id,
      gameId,
    });
    if (userAlreadyHasGame) {
      return res.status(400).json({ message: "User already has that game" });
    }
    const purchase = await Purchase.create({
      gameId,
      userId: req.currentUser.id,
    });
    res.status(201).json(purchase);
  } catch (error) {
    res
      .status(400)
      .json({ error: "Error registering a purchase", message: error.message });
  }
}

module.exports = create;

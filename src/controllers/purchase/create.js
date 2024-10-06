const { Purchase, Game } = require("../../models");

async function create(req, res) {
  try {
    const { gameId } = req.body;
    const game = await Game.findOne({
      where: {
        id: gameId,
        deleted_at: null,
      },
    });
    if (!game) {
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
      total: game.total,
    });
    res.status(201).json(purchase);
  } catch (error) {
    res
      .status(400)
      .json({ error: "Error registering a purchase", message: error.message });
  }
}

module.exports = create;

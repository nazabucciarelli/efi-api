const { Review, Game } = require("../../models");

async function list(req, res) {
  try {
    const { gameId } = req.params;
    const gameExist = await Game.findOne({ id: gameId });
    if (!gameExist) {
      return res
        .status(404)
        .json({ message: `Game with ID ${gameId} doesn't exist` });
    }
    const reviews = await Review.findAll({
      deleted_at: null,
      gameId,
    });
    res.status(200).json(reviews);
  } catch (error) {
    res
      .status(400)
      .json({ error: "Error listing reviews", message: error.message });
  }
}

module.exports = list;

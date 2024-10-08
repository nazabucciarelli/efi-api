const { Review, Game } = require("../../models");

async function create(req, res) {
  try {
    const { comment, rating, gameId } = req.body;
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
    const userHasAlreadyReviewed = await Review.findOne({
      where: {
        userId: req.currentUser.id,
        gameId,
      },
    });
    if (userHasAlreadyReviewed) {
      return res
        .status(400)
        .json({ message: "User has already reviewed that game" });
    }
    const review = await Review.create({
      UserId: req.currentUser.id,
      GameId: gameId,
      rating,
      comment,
    });
    res.status(201).json(review);
  } catch (error) {
    res
      .status(400)
      .json({ error: "Error creating a review", message: error.message });
  }
}

module.exports = create;

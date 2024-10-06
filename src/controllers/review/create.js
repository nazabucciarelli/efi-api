const { Review, Game } = require("../../models");

async function create(req, res) {
  try {
    const { comment, rating, gameId } = req.body;
    const gameExist = await Game.findOne({ id: gameId });
    if (!gameExist) {
      return res
        .status(404)
        .json({ message: `Game with ID ${gameId} doesn't exist` });
    }
    const userHasAlreadyReviewed = Review.findOne({
      userId: req.currentUser.id,
      gameId,
    });
    if (userHasAlreadyReviewed) {
      return res
        .status(400)
        .json({ message: "User has already reviewed that game" });
    }
    const review = await Review.create({
      gameId,
      rating,
      comment,
      userId: req.currentUser.id,
    });
    res.status(201).json(review);
  } catch (error) {
    res
      .status(400)
      .json({ error: "Error creating a review", message: error.message });
  }
}

module.exports = create;

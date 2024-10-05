const { Game } = require("../../models");

async function create(req, res) {
  try {
    if (req.currentUser.Role.name === "ROLE_ADMIN") {
      const { title, price, genreId, platformId } = req.body;
      const game = await Game.create({
        title,
        price,
        genreId,
        platformId,
      });
      res.status(201).json(game);
    } else {
      res.status(401).json({ message: "unauthorized" });
    }
  } catch (error) {
    res.status(400).json({ error: "Error creating a game" });
  }
}

module.exports = create;

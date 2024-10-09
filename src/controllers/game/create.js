const { Game, Genre, Platform } = require("../../models");

async function create(req, res) {
  try {
    if (req.currentUser.Role.name === "ROLE_ADMIN") {
      const { title, price, genreId, platformId } = req.body;
      const genre = await Genre.findOne({
        where: {
          id: genreId,
        },
      });
      if (!genre) {
        return res
          .status(404)
          .json({ message: `Genre with ID ${genreId} doesn't exist` });
      }
      const platform = await Platform.findOne({
        where: {
          id: platformId,
        },
      });
      if (!platform) {
        return res
          .status(404)
          .json({ message: `Platform with ID ${platformId} doesn't exist` });
      }
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
    res
      .status(400)
      .json({ error: "Error creating a game", message: error.message });
  }
}

module.exports = create;

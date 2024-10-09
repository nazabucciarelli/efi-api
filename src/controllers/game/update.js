const { Game } = require("../../models");

async function update(req, res) {
  try {
    if (req.currentUser.Role.name === "ROLE_ADMIN") {
      const { id } = req.params;
      const { title, price, genreId, platformId } = req.body;
      let game = await Game.findOne({
        where: {
          id,
          deleted_at: null,
        },
      });
      if (game) {
        game = await game.update({ title, price, genreId, platformId });
        res.status(200).json(game);
      } else {
        res.status(404).json({ message: `Game with ID ${id} not found` });
      }
    } else {
      res.status(401).json({ message: "Unauthorized" });
    }
  } catch (error) {
    res
      .status(400)
      .json({ error: "Error updating a game", message: error.message });
  }
}

module.exports = update;

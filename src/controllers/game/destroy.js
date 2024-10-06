const { Game } = require("../../models");

async function destroy(req, res) {
  try {
    if (req.currentUser.Role.name === "ROLE_ADMIN") {
      const { id } = req.params;
      let game = await Game.findOne({
        where: {
          id,
          deleted_at: null,
        },
      });
      if (game) {
        game = await game.update({ deleted_at: new Date() });
        res.status(204);
      } else {
        res.status(404).json({ message: `Game with ID ${id} not found` });
      }
    } else {
      res.status(401).json({ message: "Unauthorized" });
    }
  } catch (error) {
    res
      .status(400)
      .json({ error: "Error deleting a game", message: error.message });
  }
}

module.exports = destroy;

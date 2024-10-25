const { Game, Genre, Platform } = require("../../models");

async function show(req, res) {
  try {
    const game = await Game.findByPk(req.params.id, {
      include: [
        {
          model: Genre,
          as: "genre",
          attributes: ["id", "name"],
        },
        {
          model: Platform,
          as: "platform", // Opcional
          attributes: ["id", "name"],
        }
      ],
    });
    
    if (!game) {
      return res.status(404).json({ error: "Game not found" });
    }

    res.status(200).json(game);
  } catch (error) {
    res
      .status(400)
      .json({ error: "Error retrieving game", message: error.message });
  }
}

module.exports = show;

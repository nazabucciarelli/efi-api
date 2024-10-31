const { Purchase, Game, Genre, Platform } = require("../../models");

async function list(req, res) {
  try {
    const purchases = await Purchase.findAll({
      where: {
        userId: req.currentUser.id,
      },
      include: [
        {
          model: Game,
          as: "game",
          attributes: ["id", "title", "price", "available", "sales"],
          include: [
            {
              model: Genre,
              as: "genre",
              attributes: ["id", "name"],
            },
            {
              model: Platform,
              as: "platform",
              attributes: ["id", "name"],
            },
          ],
        },
      ],
    });
    res.status(200).json(purchases);
  } catch (error) {
    res
      .status(400)
      .json({ error: "Error listing purchases", message: error.message });
  }
}

module.exports = list;

const { Game } = require("../../models");

async function create(req, res) {
  try {
    const { page } = req.query;
    const params = { deleted_at: null };
    if (page) {
      const limit = 20;
      const offset = (page - 1) * limit;
      params.limit = limit;
      params.offset = offset;
      const { count, rows } = await Game.findAndCountAll(params);
      const totalPages = Math.ceil(count / limit);
      res.status(200).json({
        collection: rows,
        totalPages,
        currentPage: page,
        totalGames: count,
      });
    } else {
      const games = await Game.findAll(params);
      res.status(200).json(games);
    }
  } catch (error) {
    res
      .status(400)
      .json({ error: "Error listing games", message: error.message });
  }
}

module.exports = create;

const { Genre } = require("../../models");

async function list(req, res) {
  try {
    const genres = await Genre.findAll({});
    res.status(200).json(genres);
  } catch (error) {
    res
      .status(400)
      .json({ error: "Error listing genres", message: error.message });
  }
}

module.exports = list;

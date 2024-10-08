const { Platform } = require("../../models");

async function list(req, res) {
  try {
    const platforms = await Platform.findAll({});
    res.status(200).json(platforms);
  } catch (error) {
    res
      .status(400)
      .json({ error: "Error listing platforms", message: error.message });
  }
}

module.exports = list;

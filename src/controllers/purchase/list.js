const { Purchase } = require("../../models");

async function list(req, res) {
  try {
    const purchases = await Purchase.findAll({
      where: {
        userId: req.currentUser.id,
      },
    });
    res.status(200).json(purchases);
  } catch (error) {
    res
      .status(400)
      .json({ error: "Error listing purchases", message: error.message });
  }
}

module.exports = list;

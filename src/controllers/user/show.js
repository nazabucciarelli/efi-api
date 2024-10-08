const { User } = require("../../models");

async function show(req, res) {
  try {
    const user = await User.findByPk(req.currentUser.id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    delete user.dataValues.password;
    return res.status(200).json(user);
  } catch (error) {
    return res
      .status(400)
      .json({ error: "Error showing user", message: error.message });
  }
}

module.exports = show;

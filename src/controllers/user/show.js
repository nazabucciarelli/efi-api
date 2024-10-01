const { User } = require("../../models");

async function show(req, res) {
  try {
    const user = await User.findByPk(req.user.dataValues.id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    return res.status(200).json(user);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Error fetching user' });
  }
};

module.exports = show;
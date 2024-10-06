const { User } = require("../../models");

async function show(req, res) {
  try {
    const user = await User.findByPk(req.currentUser.id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    return res.status(200).json(user);
  } catch (error) {
    return res.status(400).json({ error: 'Error fetching user' });
  }
};

module.exports = show;
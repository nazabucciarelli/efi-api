const User = require('../../models/user');

async function list(req, res) {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error obteniendo los usuarios' });
  }
};

module.exports = list;
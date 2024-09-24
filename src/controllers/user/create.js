const User = require('../../models/user');

async function create(req, res){
  try {
    const { name, email, password, role } = req.body;
    const user = await User.create({ name, email, password, role });
    res.status(201).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error creando el usuario' });
  }
};

module.exports = create;
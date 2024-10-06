const bcrypt = require("bcrypt");
const { User, Role } = require("../../models");

async function register(req, res) {
  try {
    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const userRole = await Role.findOne({ where: { name: "ROLE_USER" } });
    const userWithEmailAlreadyExist = await User.findOne({ where: { email } });
    if (userWithEmailAlreadyExist) {
      return res
        .status(400)
        .json({ error: "An user with that email already exists" });
    }
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      roleId: userRole.dataValues.id,
    });
    delete user.dataValues.password;
    res.status(201).json(user);
  } catch (error) {
    res
      .status(400)
      .json({ error: "Error registering user", message: error.message });
  }
}

module.exports = register;

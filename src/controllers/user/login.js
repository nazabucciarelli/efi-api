const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { User, Role } = require("../../models");

async function login(req, res) {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({
      where: { email: email },
      include: [
        {
          model: Role,
        },
      ],
    });
    if (!user) {
      return res
        .status(404)
        .json({ error: `User with email ${email} not found` });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (isMatch) {
      const tokenPayload = {
        currentUser: user,
      };

      return res.status(200).json({
        authorizationToken: jwt.sign(tokenPayload, process.env.JWT_SECRET),
      });
    } else {
      return res.status(400).json({ error: "Invalid password" });
    }
  } catch (error) {
    res
      .status(400)
      .json({ error: "Error signing in user", message: error.message });
  }
}

module.exports = login;

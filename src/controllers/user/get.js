const { User } = require('../../models')

async function get(req, res) {
  try {
    const { id } = req.params

    const user = await User.findOne({
      where: { id }
    })

    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado' })
    }

    res.status(200).json(user)
  } catch (error) {
    res.status(400).json({ error: 'Error obteniendo usuario', message: error.message })
  }
}

module.exports = get
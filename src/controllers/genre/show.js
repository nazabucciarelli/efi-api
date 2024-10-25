const { Genre } = require('../../models');

async function show(req, res) {
  try {
    const { id } = req.params;
    
    const genre = await Genre.findOne({
      where: { id }
    });

    if (!genre) {
      return res.status(404).json({ message: 'Género no encontrado' });
    }

    res.status(200).json(genre);
  } catch (error) {
    res.status(400).json({ error: 'Error obteniendo el género', message: error.message });
  }
}

module.exports = show;

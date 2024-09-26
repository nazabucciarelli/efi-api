const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const db = require('./src/models');
const userRoutes = require('./src/routes/userRoutes');

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', userRoutes);

const PORT = process.env.PORT || 4000;

db.sequelize.sync({ force: true })
  .then(async () => {
    console.log('Base de datos y tablas creadas');
  })
  .catch(error => {
    console.error('Error al sincronizar la base de datos:', error);
  });

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
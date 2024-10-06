const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const db = require('./src/models');
const userRoutes = require('./src/routes/userRoutes');
const gameRoutes = require('./src/routes/gameRoutes');
const purchaseRoutes = require('./src/routes/purchaseRoutes');
const reviewRoutes = require('./src/routes/reviewRoutes');

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', userRoutes);
app.use('/api', gameRoutes);
app.use('/api', purchaseRoutes);
app.use('/api', reviewRoutes);

const PORT = process.env.PORT || 4000;

db.sequelize.sync({ force: false })
  .then(async () => {
    console.log('Database and tables created');
  })
  .catch(error => {
    console.error('Error syncing the database:', error);
  });

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
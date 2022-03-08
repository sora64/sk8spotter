const sequelize = require('../config/connection');
const seedSkatepark = require('./skateparkData');
const seedImages = require('./imageData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedSkatepark();

  await seedImages();

  process.exit(0);
};

seedAll();

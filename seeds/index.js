const sequelize = require('../config/connection');
const seedSkatepark = require('./galleryData');
const seedImages = require('./paintingData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedSkatepark();

  await seedImages();

  process.exit(0);
};

seedAll();

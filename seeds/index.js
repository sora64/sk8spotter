const sequelize = require('../config/connection');
const seedSkatepark = require('./skateparkData');
const seedPics = require('./picData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedSkatepark();

  await seedPics();

  process.exit(0);
};

seedAll();

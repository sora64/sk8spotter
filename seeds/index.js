const sequelize = require('../config/connection');
const seedSkatepark = require('./skateparkData');
const seedPics = require('./picdata');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedSkatepark();

  await seedPics();

  process.exit(0);
};

seedAll();

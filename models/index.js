const User = require('./User');
const Skatepark = require('./Skatepark');
const Image = require('./Image');

Skatepark.hasMany(Painting, {
  foreignKey: 'gallery_id',
});

Painting.belongsTo(Gallery, {
  foreignKey: 'gallery_id',
});

module.exports = { User, Skatepark, Image };

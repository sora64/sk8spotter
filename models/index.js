const User = require('./User');
const Skatepark = require('./Skatepark');
const Painting = require('./Painting');

Skatepark.hasMany(Painting, {
  foreignKey: 'gallery_id',
});

Painting.belongsTo(Gallery, {
  foreignKey: 'gallery_id',
});

module.exports = { User, Gallery, Painting };

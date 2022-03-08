const User = require('./User');
const Skatepark = require('./Skatepark');
const Image = require('./Image');

Skatepark.hasMany(Image, {
  foreignKey: 'skatepark_id',
});

Image.belongsTo(Skatepark, {
  foreignKey: 'skatepark_id',
});

module.exports = { User, Skatepark, Image };

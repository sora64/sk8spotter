const User = require('./User');
const Skatepark = require('./Skatepark');
const Image = require('./Image');
const Comment = require('./Comment');

// associations
Skatepark.hasMany(Image, {
  foreignKey: 'skatepark_id',
});

Image.belongsTo(Skatepark, {
  foreignKey: 'skatepark_id',
});

Comment.belongsTo(User, {
  foreignKey: 'user_id',
});

Comment.belongsTo(Skatepark, {
  foreignKey: 'skatepark_id',
});

User.hasMany(Comment, {
  foreignKey: 'user_id',
});

Skatepark.hasMany(Comment, {
  foreignKey: 'skatepark_id',
});

module.exports = { User, Skatepark, Image, Comment };

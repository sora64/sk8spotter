const User = require('./User');
const Skatepark = require('./Skatepark');
const Pic = require('./Pic');
const Comment = require('./Comment');

// associations
Skatepark.hasMany(Pic, {
  foreignKey: 'skatepark_id',
});

Pic.belongsTo(Skatepark, {
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

module.exports = { User, Skatepark, Pic, Comment };

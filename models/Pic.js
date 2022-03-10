const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Pic extends Model {}

Pic.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    filename: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    skatepark_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'skatepark',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'pic',
  }
);

module.exports = Pic;

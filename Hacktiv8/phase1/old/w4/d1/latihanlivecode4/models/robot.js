'use strict';
module.exports = (sequelize, DataTypes) => {
  const Robot = sequelize.define('Robot', {
    name: {
      type: DataTypes.STRING,
      validate: {
        min: 2
      }
    },
    stock: {
      type: DataTypes.INTEGER,
      validate: {
        max: 1000
      }
    },
    price: {
      type: DataTypes.INTEGER,
      validate: {
        max: 1000000
      }
    },
    FactoryId: DataTypes.INTEGER
  }, {});
  Robot.associate = function(models) {
    Robot.belongsTo(models.Factory)
  };

  Robot.prototype.subtractStock = function(params) {
    return this.stock - 1
  }

  return Robot;
};
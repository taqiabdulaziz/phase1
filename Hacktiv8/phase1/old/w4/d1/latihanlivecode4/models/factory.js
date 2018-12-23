'use strict';
module.exports = (sequelize, DataTypes) => {
  const Factory = sequelize.define('Factory', {
    name: DataTypes.STRING,
    income: DataTypes.INTEGER,
    outcome: DataTypes.INTEGER,
  }, {});
  Factory.associate = function(models) {
    Factory.hasMany(models.Robot)
  };


  return Factory;
};
'use strict';
module.exports = (sequelize, DataTypes) => {
  const Currency = sequelize.define('Currency', {
    name: DataTypes.STRING,
    close: DataTypes.STRING,
    rate: DataTypes.INTEGER
  }, {});
  Currency.associate = function(models) {
    // associations can be defined here
  };
  return Currency;
};
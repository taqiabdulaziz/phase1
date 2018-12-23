'use strict';
const formatDate1 = require(`../helpers/formatDate`)

module.exports = (sequelize, DataTypes) => {
  const Movie = sequelize.define('Movie', {
    title: DataTypes.STRING,
    synopsis: DataTypes.STRING,
    duration: DataTypes.INTEGER,
    rating: DataTypes.INTEGER
  }, {});
  Movie.associate = function (models) {
    Movie.hasMany(models.Review)
  };

  Movie.prototype.formatDate = function () {
    return formatDate1(this.createdAt)
  }



  return Movie;
};
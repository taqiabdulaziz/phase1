'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    description: DataTypes.STRING,
    bintang: {
      type: DataTypes.STRING,
      defaultValue: 0
    },
    MovieId: DataTypes.INTEGER
  }, {
      hooks: {
        beforeCreate: function (value) {
          const Model = require(`../models`)
          const Movie = Model.Movie
          console.log(value);
          
          Movie.findOne({
            where: {
              id: value.MovieId
            }
          }).then((result) => {
            console.log(result);
            
            Movie.update({
              rating: Number(result.rating) + Number(value.bintang)
            }, {
                where: {
                id: result.id
              }
            })

          }).catch((err) => {
            console.log(err);

          });

        }
      }
    });
  Review.associate = function (models) {
    Review.belongsTo(models.Movie)
  };


  return Review;
};
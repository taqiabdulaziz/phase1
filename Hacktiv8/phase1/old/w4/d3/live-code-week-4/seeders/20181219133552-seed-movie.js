'use strict';
const fs = require(`fs`)
module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    let data = fs.readFileSync(`movies.json`, `utf8`)
    data = JSON.parse(data)
    data.forEach(element => {
      element.updatedAt = new Date()
    });
    return queryInterface.bulkInsert('Movies', data, {});

  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
     return queryInterface.bulkDelete('Movies', null, {});
  }
};

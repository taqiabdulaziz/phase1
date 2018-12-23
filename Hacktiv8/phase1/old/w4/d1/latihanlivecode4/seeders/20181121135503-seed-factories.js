'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Factories', [{
      name: 'John Doe, Inc',
      createdAt: new Date(),
      updatedAt: new Date(),
      outcome: 20000,
      income: 10000
    }, {
      name: 'Zoe Mayer, Inc',
      createdAt: new Date(),
      updatedAt: new Date(),
      outcome: 25000,
      income: 100020
    }, {
      name: 'Zack, Inc',
      createdAt: new Date(),
      updatedAt: new Date(),
      outcome: 220000,
      income: 101000
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Factories', null, {});
  }
};

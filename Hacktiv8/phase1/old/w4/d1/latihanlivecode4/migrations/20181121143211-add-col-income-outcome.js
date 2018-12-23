'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Factories', `income`, {
      type: Sequelize.INTEGER
    }), queryInterface.addColumn('Factories', `outcome`, {
      type: Sequelize.INTEGER
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(`Factories`, `income`),
      queryInterface.removeColumn(`Factories`, `outcome`);
  }
};

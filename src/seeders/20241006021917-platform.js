'use strict';
const { platforms } = require('./utils/exampleValues')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Platforms', platforms)
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Platforms', {
      name: {[Sequelize.Op.in]: platforms.map(i => i.name)}
    })
  }
};

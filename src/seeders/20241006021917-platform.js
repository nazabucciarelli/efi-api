'use strict';
const timestamp = require('./utils/timestamp')
const { platforms } = require('./utils/exampleValues')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Platforms', timestamp(platforms))
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Platforms', {
      name: {[Sequelize.Op.in]: platforms.map(i => i.name)}
    })
  }
};

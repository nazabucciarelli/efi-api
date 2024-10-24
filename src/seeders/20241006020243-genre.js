'use strict';
const { genres } = require('./utils/exampleValues')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Genres', genres)
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Genres', {
      name: {[Sequelize.Op.in]: genres.map(i => i.name)}
    })
  }
};

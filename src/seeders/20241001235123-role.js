'use strict';
const timestamp = require('./utils/timestamp')
const { roles } = require('./utils/exampleValues')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Roles', timestamp(roles))
  },
  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Roles', { 
      name: {[Sequelize.Op.in]: roles.map(i => i.name)}
     })
  }
};

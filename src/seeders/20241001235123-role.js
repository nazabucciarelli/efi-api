'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const newEntries = [
      {
        name: 'admin',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'user',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
  ]
  return queryInterface.bulkInsert('Roles', newEntries)
  },
  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Roles', { 
      name: {[Sequelize.Op.in]: ['admin', 'user']}
     })
  }
};

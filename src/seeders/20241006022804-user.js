'use strict';
const bcrypt = require("bcrypt");
const { Role } = require("../models");
const timestamp = require('./utils/timestamp')
const { users } = require('./utils/exampleValues')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const toInsert = await Promise.all(
      users.map(async (i) => {
        let role = await Role.findOne({ where: { name: i.role } });
        return {
          name: i.name,
          email: i.email,
          password: await bcrypt.hash(i.password, 10),
          roleId: role.dataValues.id,
        }
      })
    )
    return queryInterface.bulkInsert('Users', timestamp(toInsert))
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', {
      name: {[Sequelize.Op.in]: users.map(i => i.name)}
    })
  }
};

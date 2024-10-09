'use strict';
const { User, Game } = require("../models");
const { purchases } = require('./utils/exampleValues')
const timestamp = require('./utils/timestamp')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const toInsert = await Promise.all(
      purchases.map(async (i) => {
        let user = await User.findOne({ where: { name: i.User } })
        let game = await Game.findOne({ where: { title: i.Game } })
        return {
          total: i.total,
          UserId: user.dataValues.id,
          GameId: game.dataValues.id
        }
      })
    )
    return queryInterface.bulkInsert('Purchases', timestamp(toInsert))
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Purchases', { })
  }
};

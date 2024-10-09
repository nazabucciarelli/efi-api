'use strict';
const { User, Game } = require("../models");
const { reviews } = require('./utils/exampleValues')
const timestamp = require('./utils/timestamp')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const toInsert = await Promise.all(
      reviews.map(async (i) => {
        let user = await User.findOne({ where: { name: i.User } })
        let game = await Game.findOne({ where: { title: i.Game } })
        return {
          comment: i.comment,
          rating: i.rating,
          UserId: user.dataValues.id,
          GameId: game.dataValues.id
        }
      })
    )
    return queryInterface.bulkInsert('Reviews', timestamp(toInsert))
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Reviews', { })
  }
};

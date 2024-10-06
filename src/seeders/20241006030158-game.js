'use strict';
const timestamp = require('./utils/timestamp')
const { Genre, Platform } = require('../models')
const { games } = require('./utils/exampleValues')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const toInsert = await Promise.all(
      games.map(async (i) => {
        let genre = await Genre.findOne({ where: { name: i.genre } })
        let platform = await Platform.findOne({ where: { name: i.platform } })
        return {
          title: i.title,
          price: i.price,
          available: i.available,
          genreId: genre.dataValues.id,
          platformId: platform.dataValues.id
        }
      })
    )
    return queryInterface.bulkInsert('Games', timestamp(toInsert))
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Games', {
      title: {[Sequelize.Op.in]: games.map(i => i.title)} 
    })
  }
};

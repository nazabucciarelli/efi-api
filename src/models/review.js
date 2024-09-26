module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    comment: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1,
        max: 5
      }
    },
  }, {
    timestamps: true,
  });

  Review.associate = (models) => {
    models.User.belongsToMany(models.Game, { through: models.Review });
    models.Game.belongsToMany(models.User, { through: models.Review });
  };

  return Review;
};

module.exports = (sequelize, DataTypes) => {
  const Game = sequelize.define(
    "Game",
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      price: {
        type: DataTypes.DECIMAL,
        allowNull: false,
      },
      available: {
        type: DataTypes.BOOLEAN,
        defaultValue: true, 
      },
    },
    {
      timestamps: true,
      paranoid: true,
      deletedAt: "deleted_at",
    }
  );

  Game.associate = (models) => {
    Game.belongsTo(models.Genre, { foreignKey: "genreId" });
    Game.belongsTo(models.Platform, { foreignKey: "platformId" });
  };

  return Game;
};

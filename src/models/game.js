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
      sales: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      }
    },
    {
      timestamps: true,
      paranoid: true,
      deletedAt: "deleted_at",
    }
  );

  Game.associate = (models) => {
    Game.belongsTo(models.Genre, { as: "genre", foreignKey: "genreId" });
    Game.belongsTo(models.Platform, { as: "platform", foreignKey: "platformId" });
  };  

  return Game;
};

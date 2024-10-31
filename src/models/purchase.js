module.exports = (sequelize, DataTypes) => {
  const Purchase = sequelize.define(
    "Purchase",
    {
      total: {
        type: DataTypes.DECIMAL,
        allowNull: false,
      },
    },
    {
      timestamps: true,
    }
  );

  Purchase.associate = (models) => {
    Purchase.belongsTo(models.Game, { as: "game", foreignKey: "gameId" });
    models.User.belongsToMany(models.Game, { through: models.Purchase, unique: false });
    models.Game.belongsToMany(models.User, { through: models.Purchase, unique: false });
  };

  return Purchase;
};

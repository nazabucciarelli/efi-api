module.exports = (sequelize, DataTypes) => {
  const Platform = sequelize.define(
    "Platform",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: true,
      paranoid: true,
      deletedAt: "deleted_at",
    }
  );

  Platform.associate = (models) => {
    Platform.hasMany(models.Game, { foreignKey: "platformId" });
  };

  return Platform;
};

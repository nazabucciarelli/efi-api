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
      timestamps: false,
    }
  );

  Platform.associate = (models) => {
    Platform.hasMany(models.Game, { foreignKey: "platformId" });
  };

  return Platform;
};

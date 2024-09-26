module.exports = (sequelize, DataTypes) => {
  const Gender = sequelize.define(
    "Gender",
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

  Gender.associate = (models) => {
    Gender.hasMany(models.Game, { foreignKey: "genderId" });
  };

  return Gender;
};

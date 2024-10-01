module.exports = (sequelize, DataTypes) => {
  const Genre = sequelize.define(
    "Genre",
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

  Genre.associate = (models) => {
    Genre.hasMany(models.Game, { foreignKey: "genreId" });
  };

  return Genre;
};

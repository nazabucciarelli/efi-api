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
      timestamps: false,
    }
  );

  Genre.associate = (models) => {
    Genre.hasMany(models.Game, { foreignKey: "genreId" });
  };

  return Genre;
};

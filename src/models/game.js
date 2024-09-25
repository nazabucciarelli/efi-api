module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      genderId: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Gender',
            key: 'id',
          },
        allowNull: false,
      },
      platformId: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Platform',
            key: 'id',
          },
        allowNull: false,
      },
      price: {
        type: DataTypes.DECIMAL,
        allowNull: false,
      },
      available: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        default: 1,
      }
    }, {
      timestamps: true,
    });
  
    return User;
  };
  
const { DataTypes } = require('sequelize');

// TODO: TBD
module.exports = (sequelize) => {
  sequelize.define('assignment', {
    // attributes
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL(13, 4),
      allowNull: false,
    },
    deadline: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
  
    // options
  
  });
};

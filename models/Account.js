const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('account', {
    // attributes
    bankName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    number: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    currency: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
  
    // options
  
  });
};

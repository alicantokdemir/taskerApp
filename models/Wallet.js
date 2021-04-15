const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('wallet', {
    // attributes
    name: {
      type: DataTypes.STRING,
    },
    pendingBalance: {
      type: DataTypes.DECIMAL(13, 4),
      allowNull: false,
      defaultValue: 0,
    },
    availableBalance: {
      type: DataTypes.DECIMAL(13, 4),
      allowNull: false,
      defaultValue: 0,
    },
    currency: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
    }
  }, {
  
    // options
  
  });
};

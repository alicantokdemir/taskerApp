const { DataTypes } = require('sequelize');

// TODO: TBD
module.exports = (sequelize) => {
  sequelize.define('notification_settings', {
    // attributes
    optIn: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
  }, {
  
    // options
  
  });
};

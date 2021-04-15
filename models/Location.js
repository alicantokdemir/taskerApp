const { DataTypes } = require('sequelize');

// TODO: find data type to save coordinates, and run cronjob to remove expired coords on regular basis
module.exports = (sequelize) => {
  sequelize.define('location', {
    // attributes
    lat: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lng: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    location: {
      type: DataTypes.GEOMETRY('POINT'),
      allowNull: false,
    },
    timestamp: {
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

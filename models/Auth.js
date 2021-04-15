const { DataTypes } = require('sequelize');
const { AUTH_TYPES } = require('../enums/AuthTypes');

module.exports = (sequelize) => {
  sequelize.define('auth', {
    // attributes
    token: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
      type: AUTH_TYPES,
      allowNull: false,
    },
  }, {
  
    // options
  
  });
};

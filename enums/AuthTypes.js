const { DataTypes } = require('sequelize');

module.exports = {
  AUTH_TYPES: DataTypes.ENUM('facebook', 'google', 'apple', 'password')
};

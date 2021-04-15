const { DataTypes } = require('sequelize');

module.exports = {
  USER_TYPES: DataTypes.ENUM('consumer', 'provider')
};

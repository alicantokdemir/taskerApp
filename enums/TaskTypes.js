const { DataTypes } = require('sequelize');

module.exports = {
  TASK_TYPES: DataTypes.ENUM('location', 'media')
};

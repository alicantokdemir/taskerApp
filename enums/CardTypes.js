const { DataTypes } = require('sequelize');

module.exports = {
  CARD_TYPES: DataTypes.ENUM('debit', 'credit')
};

const { DataTypes } = require('sequelize');
const { CARD_TYPES } = require('../enums/CardTypes');

module.exports = (sequelize) => {
  sequelize.define('card', {
    // attributes
    token: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
      type: CARD_TYPES,
      allowNull: false,
    },
  }, {
  
    // options
  
  });
};

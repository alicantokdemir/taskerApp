const { DataTypes } = require('sequelize');
const { USER_TYPES } = require('../enums/UserTypes');

module.exports = (sequelize) => {
  sequelize.define('user', {
    // attributes
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'first_name',
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'last_name',
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
      type: USER_TYPES,
      allowNull: false,
    },
    taxId: {
      type: DataTypes.STRING,
      field: 'tax_id',
    },
    photoUrl: {
      type: DataTypes.STRING,
      field: 'photo_url',
    },
  }, {
  
    // options
  
  });
};

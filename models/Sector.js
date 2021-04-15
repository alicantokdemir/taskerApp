const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('sector', {
    // attributes
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
  
    // options
  
  });
};

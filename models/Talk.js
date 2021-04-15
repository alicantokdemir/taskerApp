const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('talk', {
    // attributes
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
  
    // options
  
  });
};

const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('message', {
    // attributes
    body: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
  
    // options
  
  });
};

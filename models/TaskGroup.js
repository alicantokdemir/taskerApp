const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('task_group', {
    // attributes
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    adminUserId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
  }, {

    // options

  });
};

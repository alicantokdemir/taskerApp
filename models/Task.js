const { DataTypes } = require('sequelize');
const { TASK_TYPES } = require('../enums/TaskTypes');

// TODO: TBD
module.exports = (sequelize) => {
  sequelize.define('task', {
    // attributes
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL(13, 4),
      allowNull: false,
    },
    deadline: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
      type: TASK_TYPES,
      allowNull: false,
    },
    order: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  }, {
  
    // options
  
  });
};

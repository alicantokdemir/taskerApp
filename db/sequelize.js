const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname');
const { applyAssociations } = require('./associations');

const modelDefiners = [
  require('../models/Account'),
  require('../models/Address'),
  require('../models/Assignment'),
  require('../models/Auth'),
  require('../models/Card'),
  require('../models/Location'),
  require('../models/Message'),
  require('../models/NotificationSettings'),
  require('../models/Sector'),
  require('../models/Talk'),
  require('../models/Task'),
  require('../models/TaskGroup'),
  require('../models/User'),
  require('../models/Wallet'),
];

for (const modelDefiner of modelDefiners) {
  modelDefiner(sequelize);
}

applyAssociations(sequelize);

module.exports = sequelize;

function applyAssociations(sequelize) {
	const { 
    account,
    address,
    assignment,
    auth,
    card,
    location,
    message,
    notification_settings,
    sector,
    talk,
    task,
    task_group,
    user,
    wallet 
  } = sequelize.models;

  task_group.belongsToMany(user, { through: 'Task_Group_User' });
  user.belongsToMany(task_group, { through: 'Task_Group_User' });

  user.hasOne(notification_settings, { foreignKey: { allowNull: false }});
  notification_settings.belongsTo(user);

  user.hasMany(wallet);
  wallet.belongsTo(user);

  user.hasMany(card);
  card.belongsTo(user);

  user.hasMany(address);
  address.belongsTo(user);

  user.hasMany(account);
  account.belongsTo(user);

  user.hasMany(auth);
  auth.belongsTo(user);

  user.belongsToMany(sector, { through: 'Sector_User' });
  sector.belongsToMany(user, { through: 'Sector_User' });

  user.hasMany(location);
  location.belongsTo(user);

  user.belongsToMany(talk, { through: 'User_Talk' });
  talk.belongsToMany(user, { through: 'User_Talk' });

  talk.hasMany(message);
  message.belongsTo(talk);

  talk.hasMany(assignment);
  assignment.belongsTo(talk);

  assignment.hasMany(task);
  task.belongsTo(assignment);

  user.hasMany(assignment);
  assignment.belongsTo(user);

  user.hasMany(task);
  task.belongsTo(user);

}

module.exports = { applyAssociations };
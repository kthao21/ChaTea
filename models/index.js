const Message = require('./Message');
const User = require('./User');

User.hasMany(Message, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});

Message.belongsTo(User, {
    foreignKey: 'user_id'
});

module.exports = { Message, User };
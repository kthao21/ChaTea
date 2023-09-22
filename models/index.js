const Message = require('./Message');
const User = require('./User');
const Group_member = require('./Group_member');
const Group_message = require('.Group_message');

User.hasMany(Message, {
    foreignKey: '',
    onDelete: ''
});

Message.belongsTo(User, {
    foreignKey: 'user_id'
});

module.exports = { Message, User, Group_member, Group_message };
const Message = require('./Message');
const User = require('./User');

// User.hasMany(Message, {
//     foreignKey: 'user_id',
//     onDelete: 'SET NULL'
// });

Message.belongsTo(User, {
    foreignKey: 'user_id', 
    onDelete: 'SET NULL'
});

module.exports = { Message, User };
const { Sequelize } = require("sequelize");

const Message = sequelize.define('Message', {
    message_id: {
        type: DataTypes.STRING,
        allowNull: false
    },
    message: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastRecieved: {
        type: DataTypes.STRING,
        allowNull: false
    },
    user_id: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Message;

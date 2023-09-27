const { Model, DataTypes } = require("sequelize");
const sequelize = require('../config/connection');

class Message extends Model { }

Message.init({
    message_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
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
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: 'users',
            key: 'user_id'
        }
    }
}, {
    sequelize,
    modelName: "message",
    timestamps: true
});

module.exports = Message;

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model { }

Comment.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        body: {
            type: DataTypes.STRING,
            allowNull: true,
        }
    }, {
    sequelize,
    timestamps: false,
})

module.exports = Comment;
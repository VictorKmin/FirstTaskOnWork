'use strict';

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        ID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        Name: {
            type: DataTypes.STRING,
        },
        age: {
            type: DataTypes.INTEGER
        }
    }, {
        tableName: 'users',
        timestamps: false
    });
    return User
};
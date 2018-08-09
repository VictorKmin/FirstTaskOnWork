'use strict';

module.exports = (sequelize, DataTypes) => {
    const Cars = sequelize.define('Cars', {
        ID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        Model: {
            type: DataTypes.STRING
        },
        Year: {
            type: DataTypes.INTEGER
        }
    }, {
        tableName: 'cars',
        timestamps: false
    });
    return Cars
};

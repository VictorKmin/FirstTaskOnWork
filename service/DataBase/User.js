const Sequelize = require('sequelize');
const sequelize = new Sequelize('testDB', 'root', 'root');

const User = sequelize.define('user', {
    name: {
        type: sequelize.DataTypes.TEXT
    },
    age: {
        type: sequelize.DataTypes.INTEGER
    }
});

// force: true will drop the table if it already exists
User.sync({force: true}).then(() => {
    // Table created
    return User.create({
        name: 'John',
        age: 10
    });
});
module.exports = User;
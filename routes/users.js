const express = require('express');
const router = express.Router();
// const User = require('../service/DataBase/models/User');
// const resolve = require('path').resolve;

//ЗАМІНИТИ НА findAll()
//
const Sequelize = require('sequelize');
const sequelize = new Sequelize('testDB', 'root', 'root', {
    host: 'localhost',
    dialect: 'postgres',
    operatorsAliases: false,

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

router.get('/', async (req, res, next) => {
    const postgres = req.app.get('postgres');
    // const Users = sequelize.import(resolve('./service/DataBase/User'));
    const users = await postgres.client.query('SELECT * FROM users', { type: sequelize.QueryTypes.SELECT});
    // const users = await User.findAll();

    res.send(JSON.stringify(users))
});

module.exports = router;

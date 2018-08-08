const express = require('express');
const router = express.Router();
// const body = require('body-parser');

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

router.post('/', async function (req, res, next) {
    res.render('saveGet', {
        firstName: req.body.firstName,
        age: req.body.age
    });
    const postgres = req.app.get('postgres');
    const userToSave = await postgres.client.query(`INSERT INTO users(ID, Name, age) VALUES (10, \"Hello\", 15)`, { type: sequelize.QueryTypes.INSERT});
    console.log(userToSave);
});


module.exports = router;
const express = require('express');
const router = express.Router();


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

router.post('/', async (req, res, next) => {

    const postgres = req.app.get('postgres');
    const ID = req.body.ID;
    // const allUsers = await postgres.client.query(`SELECT * FROM users WHERE ID = ${ID}` , { type: sequelize.QueryTypes.SELECT});

    //Цей селект працює нормально
    const allUsers = await postgres.client.query('SELECT * FROM users', { type: sequelize.QueryTypes.SELECT});
    const deletedUser =  postgres.client.query(`DELETE users WHERE ID = ${req.body.ID}`, { type: sequelize.QueryTypes.DELETE});
    console.log(deletedUser);
    console.log(allUsers);
    res.send(JSON.stringify(allUsers))
});

module.exports = router;
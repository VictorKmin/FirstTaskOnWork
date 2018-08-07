const express = require('express');
const router = express.Router();
const User = require('../service/DataBase/User');

router.get('/', function (req, res, next) {

    User.findAll().then(users => {
        res.send(users);
    })
});

module.exports = router;

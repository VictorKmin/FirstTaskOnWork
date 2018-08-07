const express = require('express');
const router = express.Router();
const sequelize = require('sequelize');

router.get('/', function (req, res, next) {
    // console.log(res);
    console.log(req.query);
    res.render('saveGet', {
        firstName: req.query.firstName,
        age: req.query.age
    });
    // console.log(sequelize());
});


module.exports = router;
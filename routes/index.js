const express = require('express');
const router = express.Router();
const sequelize = require('sequelize');

/* GET home page. */
router.get('/', function (req, res, next) {
    // console.log(sequelize());
    res.render('index', {title: 'Express'});
});

module.exports = router;

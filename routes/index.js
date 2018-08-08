const express = require('express');
const router = express.Router();
const sequelize = require('sequelize');

router.get('/',  (req, res, next)=> {
    res.render('index', {title: 'Express'});
});

module.exports = router;

const express = require('express');
const router = express.Router();
//SAVE USER
//
router.post('/', async function (req, res, next) {
    let userToSave = {
        firstName: req.body.firstName,
        age: req.body.age
    };

    if (!userToSave || userToSave.age === '' || userToSave.firstName === '') {
        res.render('error', {
            error: 'SOME FIELD IS EMPTY'
        })
    } else {
        const postgres = req.app.get('postgres');
        const userModel = postgres.getModel('User');
        await userModel.create({
            Name: userToSave.firstName,
            age: userToSave.age
        });
        res.render('saveGet', {
            firstName: userToSave.firstName,
            age: userToSave.age
        })
    }
});

//SAVE CAR
//
router.get('/', async function (req, res, next) {
    let carToSave = {
        Model: req.query.Model,
        Year: req.query.Year
};
    if (!carToSave || carToSave.Year === '' || carToSave.Model === '') {
        res.render('error', {
            error: 'SOME FIELD IS EMPTY'
        })
    } else {
        const postgres = req.app.get('postgres');
        const carModel = postgres.getModel('Cars');
        await carModel.create({
            Model: carToSave.Model,
            Year: carToSave.Year
        });
        res.render('saveGet', {
            Model: carToSave.Model,
            Year: carToSave.Year
        })
    }
});

module.exports = router;
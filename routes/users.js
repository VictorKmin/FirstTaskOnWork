const express = require('express');
const router = express.Router();

const saveUserByID = require('../controllers/users/saveUser');
const findUsersByName = require('../controllers/users/findUserByName');
const findUsers = require('../controllers/users/findUsers');
const deleteUserByID = require('../controllers/users/deleteUserByID');


router.post('/', saveUserByID);

router.get('/findByName', findUsersByName);

router.get('/', findUsers);

router.delete('/', deleteUserByID);

module.exports = router;
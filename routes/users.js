const express = require('express');
const router = express.Router();

const saveUserByID = require('../controllers/users/saveUser');
const findAllUsers = require('../controllers/users/findAllUsers');
const deleteUserByID = require('../controllers/users/deleteUserByID');


//SAVE USER
//
router.post('/', saveUserByID);

//FIND ALL USERS
//
router.get('/',findAllUsers);

// DELETE USER BY ID
//
router.get('/delete', deleteUserByID);

module.exports = router;
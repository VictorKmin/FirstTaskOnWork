const express = require('express');
const router = express.Router();
const saveCarController = require('../controllers/cars/saveCar');
const findAllCars = require('../controllers/cars/findAllCars');
const deleteCarByID = require('../controllers/cars/deleteCarByID');

router.get('/', findAllCars);
router.post('/',saveCarController);
router.delete('/', deleteCarByID);


module.exports = router;
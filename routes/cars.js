const express = require('express');
const router = express.Router();

router.get('/', async (req, res)=> {
    const postgres = req.app.get('postgres');
    const carModel = postgres.getModel('Cars');
    let cars = await carModel.findAll();

    res.json(cars);
});

module.exports = router;
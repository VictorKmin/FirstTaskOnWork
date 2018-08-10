module.exports = async (req, res)=> {
    const postgres = req.app.get('postgres');
    const carModel = postgres.getModel('Cars');
    let cars = await carModel.findAll();

    if (!cars || cars.length === 0) {
        res.render('error', {
            error: 'CARS ARE NOT FOUND'
        })
    } else {
        res.json(cars);
    }
};
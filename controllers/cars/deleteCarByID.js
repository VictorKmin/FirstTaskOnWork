module.exports = async (req, res) => {
    const postgres = req.app.get('postgres');
    const carModel = postgres.getModel('Cars');
    const carID = req.query.ID;
    let carToDelete = await carModel.findAll({
        where: {
            ID: carID
        }
    });
    if (!carToDelete|| carToDelete.length === 0) {
        res.render('error', {
            error: `CAR WITH ID ${carID} IS NOT FOUND`
        })
    } else {
        res.json(carToDelete);
        await carModel.destroy({
            where: {
                ID: carID
            }
        });
    }
};
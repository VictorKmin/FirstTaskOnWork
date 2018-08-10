module.exports = function (req, res) {
    let carToSave = {
        Model: req.body.Model,
        Year: req.body.Year
    };
    if (!carToSave || carToSave.Year === '' || carToSave.Model === '') {
        res.render('error', {
            error: 'SOME FIELD IS EMPTY'
        })
    } else {
        const postgres = req.app.get('postgres');
        const carModel = postgres.getModel('Cars');
         carModel.create({
            Model: carToSave.Model,
            Year: carToSave.Year
        });
        res.render('savedRecord', {
            Model: carToSave.Model,
            Year: carToSave.Year
        })
    }
};
module.exports = async function (req, res) {
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
        res.render('savedRecord', {
            firstName: userToSave.firstName,
            age: userToSave.age
        })
    }
}
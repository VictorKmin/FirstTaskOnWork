module.exports = async function (req, res) {
    const  postgres = req.app.get('postgres');
    const UserModel = postgres.getModel('User');
    let users = await UserModel.findAll();
    // users = null;
    if(!users && users === {}) {
        res.render('error', {
            error: "USERS ARE NOT FOUND"
        })
    } else {
        res.json(users);
    }
};
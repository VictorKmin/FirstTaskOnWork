module.exports = async (req, res)=> {
    const postgres = req.app.get('postgres');
    const UserModel = postgres.getModel('User');
    let userName = req.query.Name;
    let users = await UserModel.findAll({
        where: {
            Name: userName
        }
    });
    if (!users || users.length === 0) {
        res.render('error', {
            error: `USER WITH NAME ${userName} IS NOT FOUND`
        })
    } else {
        res.json(users)
    }
};
/**
 *
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
module.exports = async (req, res) => {
    const postgres = req.app.get('postgres');
    const UsersModel = postgres.getModel('User');
    let allUsers = await UsersModel.findAll();
    let limitUsers = (req.query.limit === '') ? 2 : req.query.limit;
    let howMuchOffsets = (req.query.page === '') ? 0 : (req.query.page - 1) * limitUsers;

    let countOfPages = Math.ceil(allUsers.length / limitUsers);
    let pageToPrint = (countOfPages > howMuchOffsets) ? howMuchOffsets : (countOfPages-1)*limitUsers;

    // here we get users
    let usersOnPage = await UsersModel.findAll({limit: limitUsers, offset: pageToPrint});
    const resp = {
        success: true,
        usersOnPage
    };
    res.json(resp);
};
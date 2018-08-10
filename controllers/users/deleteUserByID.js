module.exports = async (req, res) => {
    const postgres = req.app.get('postgres');
    const userModel = postgres.getModel('User');
    const userID = req.query.ID;

    console.log('____________________________');
    console.log(userID);
    console.log('____________________________');
    console.log('____________________________');
    console.log(req.query);
    console.log('____________________________');

    let userToDelete = await userModel.findAll({
        where: {
            ID: userID
        }
    });

    // userToDelete = null;
    if (!userToDelete || userToDelete.length === 0) {
        res.render('error', {
            error: `USER WITH ID ${userID} IS NOT FOUND`
        })
    } else {
        res.json(userToDelete);
        await userModel.destroy({
            where: {
                ID: userID
            }
        });
    }
};

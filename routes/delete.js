const express = require('express');
const router = express.Router();

router.post('/', async (req, res, next) => {
    const postgres = req.app.get('postgres');
    const UserModel = postgres.getModel('User');
    const userId = req.body.ID;
    let userToDelete = await UserModel.findAll({
        where: {
            ID: userId
        }
    });

    if (!userToDelete || userToDelete.length === 0){
        res.render('error', {
            error: `USER WITH ID ${userId} IS NOT FOUND`
        })
    }  else {
        res.render('delete', {
            user: JSON.stringify(userToDelete)
        });
        await UserModel.destroy({
            where: {
                ID: userId
            }
        });
    }
});

module.exports = router;
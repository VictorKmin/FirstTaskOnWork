const express = require('express');
const router = express.Router();

router.get('/', async (req, res, next) => {
    const  postgres = req.app.get('postgres');
    const UserModel = postgres.getModel('User');
    let users = await UserModel.findAll();
    // users = null;
    if(!users && users === {}) {
        res.render('error', {
            error: "CANT FOUND USERS"
        })
    } else {
        res.json(users);
    }
});

module.exports = router;
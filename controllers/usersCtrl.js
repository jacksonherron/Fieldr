const db = require('../models');

const createUser = (req, res) => {
    db.User.create(req.body, (error, createdUser) => {
        console.log(createUser);
    })
}

module.exports = {
    createUser
}
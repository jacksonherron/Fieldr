const db = require('../models');

const createUser = (req, res) => {
    db.User.create(req.body, (error, createdUser) => {
        if (error) return console.log(error);

        console.log(createUser);
        res.json({
            data: createdUser
        });
    })
}

const newSession = (req, res) => {
    res.render('users/login');
}
const createSession = (req, res) => {
    console.log(`I work`);
}

const newUser = (req, res) => {
    res.render(`users/signup`);
}

module.exports = {
    createUser,
    newSession,
    createSession,
    newUser
}
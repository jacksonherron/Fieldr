const db = require('../models');

const createUser = (req, res) => {
    db.User.create(req.body, (error, createdUser) => {
        if (error) return console.log(error);
        res.render(`/profile/show.ejs`)
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
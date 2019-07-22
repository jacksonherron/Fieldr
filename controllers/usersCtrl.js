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
    const errors = [];
    if (!req.body.email) {
        errors.push({ field: 'email', message: 'Did not enter a valid email' });
    }

    if (!req.body.password) {
        errors.push({ field: 'password', message: 'Did not enter a valid password' })
    }

    if (errors.length) {
        return res.render('users/login', { errors })
    }
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
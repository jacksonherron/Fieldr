const db = require('../models');
const bcrypt = require('bcryptjs');

const createUser = (req, res) => {
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

    // Generate Hashed Password
    bcrypt.genSalt(10, (error, salt) => {
        if (error) return res.render(`/users/signup`, { errors: [{ message: 'Something went wrong. Try Again' }] })

        bcrypt.hash(req.body.password, salt, (error, hash) => {
            if (error) return res.render('users/signup', { errors: [{ message: 'Something went wrong. Try again' }] });
            req.body.password = hash;

            db.User.create(req.body, (error, createdUser) => {
                if (error) return console.log(error);
                res.json({
                    data: createdUser
                })
            })
        })

    });

}

const newSession = (req, res) => {
    res.render('users/login');
}
const createSession = (req, res) => {

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
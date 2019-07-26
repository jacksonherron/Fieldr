const db = require('../models');
const bcrypt = require('bcryptjs');

const newUser = (req, res) => {
    res.render(`signup`);
}

const createUser = (req, res) => {
    const errors = [];
    if (!req.body.email) {
        errors.push({ field: 'email', message: 'Please enter a valid email' });
    }

    if (!req.body.password) {
        errors.push({ field: 'password', message: 'Please enter a valid password' })
    }

    if (errors.length) {
        return res.render('signup', { errors })
    }

    // Generate Hashed Password
    bcrypt.genSalt(10, (error, salt) => {
        if (error) return res.render(`signup`, { errors: [{ message: 'Something went wrong, please try again' }] })

        bcrypt.hash(req.body.password, salt, (error, hash) => {
            if (error) return res.render('signup', { errors: [{ message: 'Something went wrong, please try again' }] });
            req.body.password = hash;

            db.User.create(req.body, (error, createdUser) => {
                if (error) return res.render('signup', { errors: [{ message: 'Something went wrong, please try again' }] });
                res.redirect('/login');
            })
        })

    });

}

const newSession = (req, res) => {
    res.render('login');
}

const createSession = (req, res) => {
    const errors = [];
    if (!req.body.email) {
        errors.push({
            field: 'email',
            message: 'Please enter a valid email'
        })
    }
    if (!req.body.password) {
        errors.push({
            field: 'password',
            message: 'Please enter a valid password'
        })
    }
    if (errors.length) {
        return res.render(`login`, { errors })
    }
    db.User.findOne({ email: req.body.email }, (error, foundUser) => {
        if (error) return res.render(`login`, { errors: [{ message: `Something went wrong, please try again` }] });
        if (!foundUser) return res.render(`login`, { errors: [{ message: `Invalid username and/or password` }] });

        bcrypt.compare(req.body.password, foundUser.password, (error, match) => {
            if (error) return res.render(`login`, { errors: [{ message: `Something went wrong, please try again` }] });
            if (!match) return res.render(`login`, { errors: [{ message: `Invalid username and/or password` }] });

            if (match) {
                req.session.currentUser = { _id: foundUser._id, firstName: foundUser.firstName, lastName: foundUser.lastName, email: foundUser.email, sign_up_date: foundUser.sign_up_date };
                return res.redirect(`/home`);
            }
        })
    })

}

const deleteSession = (req, res) => {
    req.session.destroy(error => {
        if (error) return (res.render(`/home`), { error: [{ message: `Something went wrong, please try again` }] });
        res.redirect(`/`);
    })
}

const showProfile = (req, res) => {
    res.render('profile/show', { currentUser: req.session.currentUser })
}



module.exports = {
    newUser,
    createUser,
    newSession,
    createSession,
    deleteSession,
    showProfile
}
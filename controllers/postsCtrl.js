const db = require('../models');

const showHomePage = (req, res) => {
    res.render(`/home`, { currentUser: req.session.currentUser });
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
        return res.render(`users/login`, { errors })
    }
    db.User.findOne({ email: req.body.email }, (error, foundUser) => {
        if (error) return res.render(`users/login`, { errors: [{ message: `Something went wrong. Try again` }] });
        if (!foundUser) return res.render(`users/login`, { errors: [{ message: `Invalid username and/or password` }] });

        bcrypt.compare(req.body.password, foundUser.password, (error, match) => {
            if (error) return res.render(`users/login`, { errors: [{ message: `Something went wrong` }] });
            if (!match) return res.render(`users/login`, { errors: [{ message: `Invalid username and/or password` }] });

            if (match) {
                req.session.currentUser = { _id: foundUser._id, firstName: foundUser.firstName, email: foundUser.email }
                console.log(req.session.currentUser);
                return res.redirect(`/home.ejs`);
            }
        })
    })


}

module.exports = { showHomePage, createSession };


const db = require('../models');

const showHomePage = (req, res) => {
    if (req.session.currentUser) {
        return res.render('home.ejs', { currentUser: req.session.currentUser });
    } return res.redirect('/login')
};

module.exports = {
    showHomePage,
}


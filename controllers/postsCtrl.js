const db = require('../models');

const showHomePage = (req, res) => {
    res.render('profile/show.ejs', { currentUser: req.session.currentUser });
};

module.exports = {
    showHomePage,
}

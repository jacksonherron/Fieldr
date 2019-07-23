const db = require('../models');

const showHomePage = (req, res) => {
    if (req.session.currentUser) {
        return res.render('home.ejs', { currentUser: req.session.currentUser });
    } return res.redirect('/login')
};

const createNewPost = (req, res) => {

}

const joinPost = (req, res) => {

}

const unjoinPost = (req, res) => {

}

const deletePost = (req, res) => {

}


module.exports = {
    showHomePage,
    createNewPost,
    joinPost,
    unjoinPost,
    deletePost
}

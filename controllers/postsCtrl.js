const db = require('../models');

const showHomePage = (req, res) => {
    if (req.session.currentUser) {
        db.Post.find({}, (err, foundPosts) => {
            if (err) return res.render('home.ejs', { currentUser: req.session.currentUser });
            res.render('home.ejs', { currentUser: req.session.currentUser, posts: foundPosts });
        });
    } else return res.redirect('/login');
};

const createNewPost = (req, res) => {
    // const errors = [];
    // if (!req.body.sport) {
    //     errors.push({ field: 'sport', message: 'Must define a sport you want to play.' });
    // }
    // if (!req.body.date_time) {
    //     errors.push({ field: 'date_time', message: 'Must specify a date and time.' });
    // }
    // if (!req.body.location) {
    //     errors.push({ field: 'location', message: 'Must specify a location.' });
    // }
    // if (!req.session.currentUser) {
    //     errors = [];
    //     errors.push({ field: 'Error', message: 'Something went wrong, please log in and try again.' });
    //     return res.render('users/login', { errors });
    // }
    // if (errors.length) {
    //     return res.render('home', { errors })
    // }
    // db.User.findById(req.session.currentUser._id, (error, foundUser) => {
    //     if (error) return console.log(error);
    //     db.Post.create({
    //         sport: req.body.sport,
    //         date_time: req.body.date_time,
    //         location: req.body.location,
    //         descr: req.body.descr,
    //         host: foundUser._id,
    //         },
    //         (error, createdPost) => {
    //             foundUser.posts.push(createdPost._id)
    //         }
    //     );
    // });
};

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

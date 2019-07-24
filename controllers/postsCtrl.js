const db = require('../models');
const response = require('./response');

const showHomePage = (req, res) => {
    if (req.session.currentUser) {
        const currentDate = new Date(Date.now());
        db.Post.find({ date_time: { '$gte': currentDate } })
            .populate('host')
            .populate({
                path: 'comments',
                model: 'Comment',
                populate: {
                    path: 'user',
                    model: 'User',
                }
            })
            .exec((err, foundPosts) => {
                if (err) return res.render('home/show.ejs', { currentUser: req.session.currentUser });
                res.render('home/show.ejs', { currentUser: req.session.currentUser, posts: foundPosts });
            })

    } else res.render('login', { errors: [{ message: 'Something went wrong please, please log in and try again.'}] });
};

const showProfilePage = (req, res) => {
    if (req.session.currentUser) {
        const currentDate = new Date(Date.now());
        db.Post.find({ date_time: { '$gte': currentDate } })
            .populate('host')
            .populate({
                path: 'comments',
                model: 'Comment',
                populate: {
                    path: 'user',
                    model: 'User',
                }
            })
            .exec((err, foundPosts) => {
                if (err) return res.render('home/show.ejs', { currentUser: req.session.currentUser });
                res.render('home/show.ejs', { currentUser: req.session.currentUser, posts: foundPosts });
            })

    } else res.render('login', { errors: [{ message: 'Something went wrong please, please log in and try again.'}] });
};

// const showHomePage = (req, res) => {
//     if (req.session.currentUser) {
//         res.render('home/show.ejs', { currentUser: req.session.currentUser });
//     } else return res.render('login', { errors: [{ message: 'Something went wrong please, please log in and try again.'}] });
// }

// Queries the data base and returns all posts, then renders home/show.ejs to display them
// const getAllFuturePosts = (req, res) => {
//     const currentDate = new Date(Date.now());
//     db.Post.find({ date_time: { '$gte': currentDate } })
//         .populate('host')
//         .populate({
//             path: 'comments',
//             populate: {
//                 path: 'user',
//             }
//         })
//         .exec((err, foundPosts) => {
//             if (err) return response.sendErrorResponse(res, err);
//             response.sendResponse(res, foundPosts);
//         }
//     );
// };

const createNewPost = (req, res) => {
    if (req.session.currentUser) {
        let errors = [];
        if (!req.body.sport) {
            errors.push({ field: 'sport', message: 'Must define a sport you want to play.' });
        }
        if (!req.body.date_time) {
            errors.push({ field: 'date_time', message: 'Must specify a date and time.' });
        }
        if (!req.body.location) {
            errors.push({ field: 'location', message: 'Must specify a location.' });
        }
        if (!req.session.currentUser) {
            errors = [];
            errors.push({ message: 'Something went wrong, please log in and try again.' });
            return res.render('login', { errors });
        }
        if (errors.length) {
            return res.render('home/show.ejs', { currentUser: req.session.currentUser, errors })
        }
        db.User.findById(req.session.currentUser._id, (error, foundUser) => {
            if (error) return res.render('home/show.ejs', { currentUser: req.session.currentUser, errors: [{ message: 'Something went wrong, please try again'}] });
            db.Post.create({
                sport: req.body.sport,
                date_time: req.body.date_time,
                location: req.body.location,
                descr: req.body.descr,
                host: foundUser._id,
                },
                (error, createdPost) => {
                    if (error) return res.render('home/show.ejs', { currentUser: req.session.currentUser, errors: [{ message: 'Something went wrong, please try again.'}] });
                    foundUser.posts.push(createdPost._id);
                    return res.redirect('/home');
                });
            });
    } else return res.render('login', { errors: [{ message: 'Something went wrong, please log in and try again'}] });
};

const joinPost = (req, res) => {

}

const unjoinPost = (req, res) => {

}

const deletePost = (req, res) => {

}


module.exports = {
    showHomePage,
    showProfilePage,
    createNewPost,
    joinPost,
    unjoinPost,
    deletePost
}

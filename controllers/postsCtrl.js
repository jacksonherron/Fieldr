const db = require('../models');


// ------------------- API ------------------- //
const showPostsAPI = (req, res) => {
    db.Post.find({}, (err, allPosts) => {
        if (err) return res.json({ status: 400, error: err });
        res.json({ status: 200, data: allPosts })
    });
};

// ------------------- Home Page -------------------//
// GET user home page

app.get('/api/v1/users', (req, res) => {
    db.User.find({}, (err, allUsers) => {
        if (err) return res.json({ status: 400, error: err });
        res.json({ status: 200, data: allUsers })
    });
});


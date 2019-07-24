const db = require('../models');

const createNewComment = (req, res) => {
    db.Comment.create({ content: req.body.content, user: req.session.currentUser._id, post: req.body.post_id }, (error, newComment) => {
        if (error) return res.json({ status: 400, message: 'something went wrong' });
        console.log('Comment created: ', newComment);
        db.Post.findById(req.body.post_id, (error, foundPost) => {
            if (error) return res.json({ status: 400, message: 'something went wrong' });
            console.log('Found post:', foundPost);
            foundPost.comments.push(newComment._id);
            foundPost.save();
            res.json({ status: 200 });
        })
    })
}

const deleteComment = (req, res) => {

}

module.exports = {
    createNewComment,
    deleteComment
}
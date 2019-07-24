const db = require('../models');

const createNewComment = (req, res) => {
    console.log(req.body.content, req.session.currentUser._id, req.body.post_id)

    db.Comment.create({ content: req.body.content, user: req.session.currentUser._id, post: req.body.post_id }, (error, newComment) => {
        if (error) { 
            console.log(error);
            return res.json({ status: 400, message: 'something went wrong' });
        }
        console.log('Comment created: ', newComment);
        db.Post.findById(req.body.post_id, (error, foundPost) => {
            if (error) return res.json({ status: 400, message: 'something went wrong' });
            foundPost.comments.push(newComment._id);
            console.log('Updated Post', foundPost);
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
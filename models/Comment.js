const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    time_posted: {
        type: Date,
        required: true,
        default: Date.now
    },
    post: {
        type: Schema.Types.ObjectId,
        ref: 'Post',
        // required: true,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        // required: true,
    },
    content: {
        type: String,
        required: true,
    }
});

const Comment = mongoose.model('Comment', commentSchema);
module.exports = Comment;
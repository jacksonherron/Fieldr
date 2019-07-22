const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    date_time: {
        type: Date,
        required: true,
        default: Date.now,
    },
    // post: {
    //     type: Schema.Types.objectId,
    //     ref: 'Post',
    //     required: true,
    // },
    // user: {
    //     type: Schema.Types.objectId,
    //     ref: 'User',
    //     required: true,
    // },
    content: {
        type: String,
        required: true,
    }
});

const Comment = mongoose.model('Comment', commentSchema);
module.exports = Comment;
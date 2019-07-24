const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    sport: {
        type: String,
        required: true,
    },
    date_time: {
        type: Date,
        // required: true,
    },
    time_posted: {
        type: Date,
        required: true,
        default: Date.now
    },
    location: {
        type: String,
        required: true,
    },
    descr: {
        type: String,
    },
    joins: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
    host: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        // required: true,
    },
    comments: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Comment'
        }
    ],
});

const Post = mongoose.model('Post', postSchema);
module.exports = Post;
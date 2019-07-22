const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    sport: {
        type: String,
        required: true,
    },
    date_time: {
        type: Date,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    descr: {
        type: String,
        required: true,
    },
    joins: [
        {
            type: Schema.Types.objectId,
            ref: 'User'
        }
    ],
    host: {
        type: Schema.Types.objectId,
        ref: 'User'
    },
    comments: [
        {
            type: Schema.Types.objectId,
            ref: 'Comment'
        }
    ],
});

const Post = mongoose.model('Post', postSchema);
module.exports(post);
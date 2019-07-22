const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    sign_up_date: {
        type: Date,
        required: true,
        default: Date.now,
    },
    posts: [
        {
            type: Schema.Types.objectId,
            ref: 'Post',
        }
    ],
    joins: [
        {
            type: Schema.Types.objectId,
            ref: 'Post',
        }
    ],
});

const User = mongoose.model('User', userSchema);

module.exports = User;
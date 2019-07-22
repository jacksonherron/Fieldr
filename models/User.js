const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phoneNum: {
        type: Number,
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
            type: Schema.Types.ObjectId,
            ref: 'Post',
        }
    ],
    joins: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Post',
        }
    ],
});

const User = mongoose.model('User', userSchema);

module.exports = User;
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
    // posts: [
    //     {
<<<<<<< HEAD
    //         type: Schema.Types.objectId,
=======
    //         type: Schema.type.objectId,
>>>>>>> 4cdf0430701cb639baf3e343892afc0185403833
    //         ref: 'Post',
    //     }
    // ],
    // joins: [
    //     {
    //         type: Schema.Types.objectId,
    //         ref: 'Post',
    //     }
    // ],
});

const User = mongoose.model('User', userSchema);

module.exports = User;
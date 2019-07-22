const db = require('../models');

const createUser = (req, res) => {
    db.User.create(req.body, (error, createdUser) => {
        console.log(createUser);
    })
}

const newSession = (req, res) => {
    console.log(`I work`);
}
const createSession = (req, res) => {
    console.log(`I work`);
}

module.exports = {
    createUser,
    newSession,
    createSession
}
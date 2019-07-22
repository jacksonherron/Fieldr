const db = require('../models');

const userList = require('./users.json');
const postList = require('./posts.json');
const commentList = require('./comments.json')

db.User.insertMany(userList);
const db = require('../models');

const userList = require('./users.json');
const postList = require('./posts.json');
const commentList = require('./comments.json')

// removes all users from db.User and add from userList
// db.User.deleteMany({}, () => {
//     db.User.collection.insertMany(userList, () => {
//         // removes all posts from db.Post and add from postList
//         db.Post.deleteMany({}, () => {
//             db.Post.collection.insertMany(postList, () => {
//                 // Connects posts to users and vice-versa
//                 postList.forEach(post => {
//                     db.User.findOne({ firstName: post.hostedBy }, (err, foundUser) => {
//                         if (err) return console.log(err);
//                         db.Post.findOneAndUpdate(
//                             { sport: post.sport },
//                             { 
//                                 host: foundUser._id,
//                                 date_time: new Date(post.date_time_string),
//                                 time_posted: new Date(post.time_posted_string),
//                             },
//                             { new: true }, (err, updatedPost) => {
//                             if (err) return console.log(err);
//                             foundUser.posts.push(updatedPost);
//                             foundUser.save();
//                         });
//                     });
//                 });
//                 // removes all comments from db.Comment and adds from commentList
//                 db.Comment.deleteMany({}, () => {
//                     db.Comment.insertMany(commentList, () => {
//                         // Connects comments to posts and vice-versa
//                         commentList.forEach(comment => {
//                             db.Comment.findOneAndUpdate(
//                                 { content: comment.content },
//                                 { time_posted: new Date(comment.time_posted_string) },
//                                 (err, foundComment) => {
//                                 if (err) return console.log(err);
//                                 db.Post.findOne({ sport: comment.postSport}, (err, foundPost) => {
//                                     if (err) return console.log(err);
//                                     foundPost.comments.push(foundComment._id);
//                                     foundPost.save();
//                                     foundComment.post = foundPost._id;
//                                 });
//                                 db.User.findOne({ firstName: comment.userName }, (err, foundUser) => {
//                                     if (err) return console.log(err);
//                                     foundComment.user = foundUser._id;
//                                     foundComment.save();
//                                 });
//                             });
//                         });
//                     });
//                 });
//             });
//         });
//     });
// });


const currentDate = new Date(Date.now());

db.Post.find({ date_time: { '$gte': currentDate } }, (err, foundPosts) => {
    if (err) return console.log(err);
    console.log(foundPosts);
});
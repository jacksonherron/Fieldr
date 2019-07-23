const db = require('../models');

// const userList = require('./users.json');
// const postList = require('./posts.json');
// const commentList = require('./comments.json')

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
//                         db.Post.findOneAndUpdate({ sport: post.sport }, { host: foundUser._id }, { new: true }, (err, updatedPost) => {
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
//                             db.Comment.findOne( { content: comment.content }, (err, foundComment) => {
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

console.log(Date.now().getISOString())
// const currentDate = new Date(Date.now());
// const currentISODate = currentDate.toISOString();
// console.log(currentISODate);

// db.Post.find({ date_time: { $gt: currentISODate } }, (err, foundPosts) => {
//     if (err) return console.log(err);
//     console.log();
// });

// var date = new Date('1995-12-17T03:24:00');
// console.log(date.toUTCString())
const db = require('../models');

const userList = require('./users.json');
const postList = require('./posts.json');
const commentList = require('./comments.json')

// removes all users from db.User and add from userList
db.User.deleteMany({}, () => {
    userList.forEach(user => {
        db.User.create(user, (err, newUser) => {
            if (err) return console.log(err);
            // console.log(newUser);
        });
    });
});

// removes all posts from db.Post and add from postList
db.Post.deleteMany({}, () => {
    postList.forEach(post => {
        db.Post.create(post, (err, newPost) => {
            if (err) return console.log(err);
        });
        // Connect post to the user
        console.log(post);
        db.User.findOne({ firstName: post.hostedBy }, (err, user) => {
            if (err) return console.log(err);
            return console.log(user, user._id);
        // db.Post.findOneAndUpdate(
        //     { sport: post.sport },
        //     { host: db.User.findOne({ firstName: post.hostedBy }, (err, user) => {
        //         if (err) return console.log(err);
        //         return user._id;
        //     }) }
        // );
        });
    });
});

// removes all comments from db.Comment and add from commentList
db.Comment.deleteMany({}, () => {
    commentList.forEach(comment => {
        db.Comment.create(comment, (err, newComment) => {
            if (err) return console.log(err);
            // console.log(newComment);
        });
    });
});


// // removes all badges and adds new ones from badge.json
// db.Badge.remove({}, () => {
// 	badgeList.forEach(badge => {
// 		db.Badge.create(badge, (error, createdBadge) => {
// 			if (error) return console.log(error);
// 			console.log(createdBadge);
// 		});
// 	});
// });

// db.Trainer.remove({}, () => {
// 	trainerList.forEach(trainer => {
// 		db.Trainer.create(trainer, (error, createdTrainer) => {
// 			if (error) return console.log(error);
// 			console.log(createdTrainer);
// 		});
// 	});
// });
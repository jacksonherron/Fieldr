const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

// Render home page
router.get('/', ctrl.postsCtrl.showHomePage);

// Create new post
router.post('/', ctrl.postsCtrl.createNewPost);

// Create new comment
router.post('/:postId/', ctrl.commentsCtrl.createNewComment);

// Join
router.put('/:postId/', ctrl.postsCtrl.joinPost)

// Unjoin
router.put('/:postId/', ctrl.postsCtrl.unjoinPost)

// Delete post
router.delete('/:postId/', ctrl.postsCtrl.deletePost)

// Delete comment
router.delete('/:postId/commentId/', ctrl.commentsCtrl.deleteComment)

module.exports = router;
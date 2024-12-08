const express = require("express");
const auth = require("../middleware/auth");
const { saveComment, getPostComment, getUserComment, deleteComment } = require("../controllers/commentController");
const router = express.Router();

// post a comment
router.post("/", auth, saveComment)

// get all comments in single post
router.get("/:id", getPostComment)

// get all comments post by single user
router.get("/:authorId/:postId", auth, getUserComment)

// get all comments post by single user
router.delete("/:authorId/:postId", auth, deleteComment)

module.exports = router;
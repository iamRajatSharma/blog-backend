const Comment = require("../models/Comment")

// save comment
const saveComment = async (req, res) => {
    try {
        const { comment, postId } = req.body
        const authorId = req.user.id

        const data = new Comment({
            comment, postId, authorId
        })
        data.save()
        return res.status(200).json({ message: "Comment Saved", comment: data });

    } catch (error) {
        return res.status(500).json({ message: error });
    }

}


// get all comment by post id
const getPostComment = async (req, res) => {
    try {
        const postId = req.params.id

        const data = await Comment.find({
            postId: postId
        })
        return res.status(200).json({ comments: data });

    } catch (error) {
        return res.status(500).json({ message: error });
    }
}

// get all comment by user id and post id
const getUserComment = async (req, res) => {
    try {
        const postId = req.params.postId
        const authorId = req.params.authorId

        const data = await Comment.find({
            postId: postId, authorId: authorId
        })
        return res.status(200).json({ comments: data });

    } catch (error) {
        return res.status(500).json({ message: error });
    }
}

// delete a comment
const deleteComment = async (req, res) => {
    try {
        const postId = req.params.postId
        const authorId = req.params.authorId

        const data = await Comment.findOneAndDelete({
            postId: postId, authorId: authorId
        })
        return res.status(200).json({ comments: data });

    } catch (error) {
        return res.status(500).json({ message: error });
    }
}

module.exports = {
    saveComment,
    getPostComment,
    getUserComment,
    deleteComment
}
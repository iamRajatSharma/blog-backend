const Blog = require("../models/Blog");

// Get all blogs
exports.getBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find().populate("author", "username");
        res.status(200).json(blogs);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a single blog by ID
exports.getBlogById = async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id).populate("author", "username");
        if (!blog) return res.status(404).json({ message: "Blog not found!" });
        res.status(200).json(blog);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create a new blog
exports.createBlog = async (req, res) => {
    try {
        const { title, content } = req.body;
        const user_id = req.user.id;
        const newBlog = new Blog({ title, content, author: user_id });
        await newBlog.save();
        res.status(201).json(newBlog);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update a blog
exports.updateBlog = async (req, res) => {
    try {
        const { title, content } = req.body;

        const user_id = req.user.id;
        const blog_id = req.params.id

        const blog = await Blog.findByIdAndUpdate({
            _id: blog_id, author: user_id
        },
            { title, content },
            { new: true }
        );
        if (!blog) return res.status(404).json({ message: "Blog not found!" });
        res.status(200).json(blog);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete a blog
exports.deleteBlog = async (req, res) => {
    try {
        const user_id = req.user.id;
        const blog = await Blog.findByIdAndDelete({ _id: req.params.id, author: user_id });
        if (!blog) return res.status(404).json({ message: "Blog not found!" });
        res.status(200).json({ message: "Blog deleted successfully!" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

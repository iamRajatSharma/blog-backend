const express = require("express");
const { getBlogs, getBlogById, createBlog, updateBlog, deleteBlog } = require("../controllers/blogController");
const auth = require("../middleware/auth");
const router = express.Router();


// Route to create a new blog (protected)
router.post("/", auth, createBlog);

// Route to update an existing blog by ID (protected)
router.put("/:id", auth, updateBlog);

// Route to delete a blog by ID (protected)
router.delete("/:id", auth, deleteBlog);


/**
 * @swagger
 * tags:
 *   name: Blogs
 *   description: Blog management
 */

/**
 * @swagger
 * /api/blogs:
 *   get:
 *     summary: Get all blogs
 *     tags: [Blogs]
 *     responses:
 *       200:
 *         description: List of all blogs
 *       500:
 *         description: Server error
 */
router.get("/", getBlogs);

/**
 * @swagger
 * /api/blogs/{id}:
 *   get:
 *     summary: Get a single blog by ID
 *     tags: [Blogs]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The blog ID
 *     responses:
 *       200:
 *         description: Blog details
 *       404:
 *         description: Blog not found
 *       500:
 *         description: Server error
 */
router.get("/:id", getBlogById);


module.exports = router;

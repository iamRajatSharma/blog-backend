const express = require("express");
const { getBlogs, getBlogById, createBlog, updateBlog, deleteBlog } = require("../controllers/blogController");
const auth = require("../middleware/auth");
const router = express.Router();


// Route to create a new blog (protected)
/**
 * @swagger
 * /api/blogs:
 *   post:
 *     summary: Create a new blog
 *     description: Creates a new blog post. Requires authentication via Bearer Token.
 *     tags:
 *       - Blogs
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: Title of the blog
 *                 example: "My New Blog"
 *               content:
 *                 type: string
 *                 description: Content of the blog
 *                 example: "This is the content of my new blog."
 */
router.post("/", auth, createBlog);

// Route to update an existing blog by ID (protected)
router.put("/:id", auth, updateBlog);


/**
 * @swagger
 * /api/blogs/{id}:
 *   delete:
 *     summary: Delete a single blog by ID
 *     tags: [Blogs]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: blogId
 *         schema:
 *           type: string
 *         required: true
 *     responses:
 *       200:
 *         description: Blog deleted
 *       404:
 *         description: Blog not found
 *       500:
 *         description: Server error
 */
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

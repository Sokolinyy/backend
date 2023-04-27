import express from "express";
import Blog from "../models/Blog.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    // Create new Blog from mongoose
    const newBlog = new Blog(req.body);
    // Save this new blog in database
    await newBlog.save();
    res.status(201).json(newBlog);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get("/", async (req, res) => {
  try {
    // Find all blogs, and sort it by newer
    const blogs = await Blog.find().sort({ createdAt: -1 });

    // If there are no blogs, return a JSON object with a message and an empty array
    if (blogs.length === 0) {
      res.json({ message: "No blog posts found.", blogs: [] });
    } else {
      // If blogs are found, return the blogs array as a JSON object
      res.json(blogs);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;

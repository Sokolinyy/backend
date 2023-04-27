import express from "express";
const router = express.Router();

// If there are no blogs, return a JSON object with a message and an empty array
router.get("/", (req, res) => {
  res.json({ message: "Seems like you don't have blogs..." });
});

export default router;

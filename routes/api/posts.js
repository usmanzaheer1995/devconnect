const express = require("express");
const router = express.Router();

// @route:  GET api/posts/test
// @desc:   Tests posts route
router.get("/test", (req, res) => {
  res.json({ testPosts: `TEST POSTS` });
});

module.exports = router;

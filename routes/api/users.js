const express = require("express");
const router = express.Router();

// @route:  GET api/users/test
// @desc:   Tests users route
router.get("/test", (req, res) => {
  res.json({ testUser: `TEST USER` });
});

module.exports = router;

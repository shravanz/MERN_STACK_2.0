const express = require("express");
const router = express.Router();

// @route GET api/user
// @desc  Test route
// @access Public
router.get("/", (req, res) => res.send("user Route"));

module.exports = router;

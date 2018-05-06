const bcrypt = require("bcryptjs");
const express = require("express");
const router = express.Router();
const gravitar = require("gravatar");
const jwt = require("jsonwebtoken");
const passport = require("passport");

const User = require("../../models/User");

// @route:  GET api/users/test
// @desc:   Tests users route
router.get("/test", (req, res) => {
  res.json({ testUser: `TEST USER` });
});

// @route:  POST api/users/register
// @desc:   Register a user
// @access: Public
router.post("/register", (req, res) => {
  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      return res.status(400).json({ email: "Email already exists" });
    } else {
      const avatar = gravitar.url(req.body.email, {
        s: "200", // Size
        r: "pg", // Rating
        d: "mm" // default
      });

      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        avatar,
        password: req.body.password
      });

      newUser
        .save()
        .then(user => res.json(user))
        .catch(err => console.log(err));
    }
  });
});

// @route:  POST api/users/login
// @desc:   Login a user / returning JWT token
// @access: Public
router.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  User.findOne({ email }).then(user => {
    if (!user) return res.status(404).json({ email: "User not found!" });
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        // User matched

        // Create jwt payload
        const payload = {
          id: user.id,
          name: user.name,
          avatar: user.avatar
        };

        // Sign token
        jwt.sign(
          payload,
          process.env.SECRET_KEY,
          { expiresIn: "24h" },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token
            });
          }
        );
      } else {
        return res.status(400).json({ password: "Password incorrect" });
      }
    });
  });
});

// @route:  GET api/users/current
// @desc:   Return current user
// @access: Private
router.get(
  "/current",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.json({
      id: req.user.id,
      name: req.user.name,
      email: req.user.email
    });
  }
);

module.exports = router;

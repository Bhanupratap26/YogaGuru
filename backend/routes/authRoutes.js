const express = require("express");
const router = express.Router();
const User = require("../models/User");
const ADMIN_EMAILS = require("../config/adminEmails");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");


/* REGISTER */
router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        message: "All fields required"
      });
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        message: "Email already registered"
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    let role = "user";
    if (ADMIN_EMAILS.includes(email)) {
      role = "admin";
    }

    const user = new User({
      name,
      email,
      password: hashedPassword,
      role
    });

    await user.save();

    res.json({
      message: "User Registered",
      role
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


/* LOGIN */
router.post("/login", async (req, res) => {
  try {

    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        message: "User not found"
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid credentials"
      });
    }

    const token = jwt.sign(
      { id: user._id, role: user.role },
      "SECRETKEY",
      { expiresIn: "1d" }
    );

    res.json({
      message: "Login Success",
      token,
      role: user.role
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;

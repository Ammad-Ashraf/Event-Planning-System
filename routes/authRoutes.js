const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const users = require("../models/users");
const SECRET_KEY = "afsdgdhvbsdsfghjhgfdsfghg";

router.post("/register", (req, res) => {
  const { username, password } = req.body;
  if (users.find((u) => u.username === username)) {
    return res.status(400).json({ message: "User already exists" });
  }
  users.push({ username, password });
  res.json({ message: "User registered successfully" });
});

router.post("/login", (req, res) => {
  const { username, password } = req.body;
  const user = users.find((u) => u.username === username && u.password === password);
  if (!user) {
    return res.status(400).json({ message: "Invalid credentials" });
  }
  const token = jwt.sign({ username }, SECRET_KEY);
  res.json({ token });
});

module.exports = router;

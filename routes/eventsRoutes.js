const express = require("express");
const router = express.Router();
const events = require("../models/events");

router.post("/", (req, res) => {
  const { name, description, date, time, category } = req.body;
  events.push({ id: events.length + 1, name, description, date, time, category, username: req.user.username });
  res.json({ message: "Event created successfully" });
});

router.get("/", (req, res) => {
  const userEvents = events.filter((event) => event.username === req.user.username);
  res.json(userEvents);
});

router.get("/category/:category", (req, res) => {
  const userEvents = events.filter(
    (event) => event.username === req.user.username && event.category === req.params.category
  );
  res.json(userEvents);
});

router.get("/date/:date", (req, res) => {
  const userEvents = events.filter(
    (event) => event.username === req.user.username && event.date === req.params.date
  );
  res.json(userEvents);
});

module.exports = router;
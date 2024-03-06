const express = require("express");
const User = require("../models/User.model");
const router = express.Router();
const mongoose = require("mongoose");

// gets all users
router.get("/", (req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => {
      res.status(500).json({ message: "Error while retrieving properties" });
    });
});

// gets specific property
router.get("/:userId", (req, res, next) => {
  const { userId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(userId)) {
    res.status(400).json({ message: "Specified user is not valid" });
    return;
  }

  User.findById(userId)
    .then((user) => res.status(200).json(user))
    .catch((err) => {
      console.log("Error while retrieving the user", err);
      res.status(500).json({ message: "Error while retrieving the user" });
    });
});

module.exports = router;

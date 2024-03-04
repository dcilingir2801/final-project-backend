const express = require("express");
const Listing = require("../models/Listings.model");
const router = express.Router();
const mongoose = require("mongoose");

// get listings from other hosts
router.get("/", (req, res) => {
  const { neighborhood } = req.query;
  if (neighborhood) {
    Listing.find({ "location.neighborhood": neighborhood })
      .then((listings) => res.json(listings))
      .catch((err) => {
        res.status(500).json({ message: "Error while retrieving listings" });
      });
    return;
  }
  Listing.find()
    .then((listings) => res.json(listings))
    .catch((err) => {
      res.status(500).json({ message: "Error while retrieving listings" });
    });
});

// get specific listing from other hosts
router.get("/:listingId", (req, res, next) => {
  const { listingId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(listingId)) {
    res.status(400).json({ message: "Specified property not valid" });
    return;
  }

  Listing.findById(listingId)
    .then((listing) => res.status(200).json(listing))
    .catch((err) => {
      console.log("Error while retrieving the project", err);
      res.status(500).json({ message: "Error while retrieving the property" });
    });
});

module.exports = router;

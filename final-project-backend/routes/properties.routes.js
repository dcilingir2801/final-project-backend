const express = require("express");
const Property = require("../models/Properties.model");
const router = express.Router();
const mongoose = require("mongoose");

// gets all properties
router.get("/", (req, res) => {
  Property.find()
    .then((propertiesFromDB) => res.json(propertiesFromDB))
    .catch((err) => {
      res.status(500).json({ message: "Error while retrieving properties" });
    });
});

// gets specific property
router.get("/:propertyId", (req, res, next) => {
  const { propertyId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(propertyId)) {
    res.status(400).json({ message: "Specified property not valid" });
    return;
  }

  Property.findById(propertyId)
    .then((property) => res.status(200).json(property))
    .catch((err) => {
      console.log("Error while retrieving the project", err);
      res.status(500).json({ message: "Error while retrieving the property" });
    });
});

// updates specific property
router.put("/:propertyId", (req, res, next) => {
  const { propertyId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(propertyId)) {
    res.status(400).json({ message: "Specified id is not valid"});
    return;
  }

  Property.findByIdAndUpdate(propertyId, req.body, { new: true })
    .then((updatedProperty) => res.json(updatedProperty))
    .catch((err) => {
      console.log("Error while updating the project", err);
      res.status(500).json({ message: "Error while updating the property"});
    });
});

module.exports = router;

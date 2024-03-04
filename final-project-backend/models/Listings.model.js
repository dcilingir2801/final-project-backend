const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const listingSchema = new mongoose.Schema({
  listing_id: Number,
  image: String,
  title: String,
  description: String,
  location: Object,
  price_per_night: Number,
  rating: Number,
  amenities: Array,
  owner: { type: Schema.Types.ObjectId, ref: "User" },
});

module.exports = mongoose.model("Listing", listingSchema, "listings");

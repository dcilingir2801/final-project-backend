const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: [true, 'Email is required.'],
      unique: true,
      lowercase: true,
      trim: true
    },
    password: {
      type: String,
      required: [true, 'Password is required.']
    },
    firstName: {
      type: String,
      required: [true, 'First name is required.'],
    },
    lastName: {
      type: String,
      required: [true, 'Last name is required.'],
    },
    Street: {
      type: String,
      required: [true, 'Street is required.'],
    },
    houseNumber: {
      type: Number,
      required: [true, 'House number is required.'],
    },
    postCode: {
      type: Number,
      required: [true, 'Post code is required.'],
    },
    City: {
      type: String,
      required: [true, 'City is required.'],
    },
    country: {
      type: String,
      required: [true, 'Country is required.'],
    }
  }
);

const User = model("User", userSchema);

module.exports = User;

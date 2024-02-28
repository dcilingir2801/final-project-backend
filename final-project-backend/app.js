require("dotenv").config();
require("./db");

const express = require("express");
const logger = require("morgan")

const app = express();

require("./config")(app);

app.use(logger("dev"));
app.use(express.static("public"));
app.use(express.json());

const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/final-project-airbnb")
  .then(x => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
  .catch(err => console.error("Error connecting to mongo", err));

// 👇 Start handling routes here
const indexRoutes = require("./routes/index.routes");
app.use("/api", indexRoutes);

app.get("/accounts/:username", (req, res) => {
    console.log(req.params);
    res.send(req.params);  
  });

// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require("./error-handling")(app);

module.exports = app;

require("dotenv/config");

require("./db");

const express = require("express");

const app = express();

require("./config")(app);

const propertyRoutes = require("./routes/properties.routes");
app.use("/properties", propertyRoutes);

// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require("./error-handling")(app);

module.exports = app;

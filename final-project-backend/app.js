require("dotenv/config");
require("./db");

const express = require("express");
const app = express();

require("./config")(app);

const propertyRoutes = require("./routes/properties.routes");
app.use("/properties", propertyRoutes);

const listingRoutes = require("./routes/listings.routes");
app.use("/listings", listingRoutes);

const userRoutes = require("./routes/users.routes");
app.use("/users", userRoutes);

const indexRoutes = require("./routes/index.routes");
app.use("/api", indexRoutes);

const authRouter = require("./routes/auth.routes");
app.use("/auth", authRouter);

// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require("./error-handling")(app);

module.exports = app;

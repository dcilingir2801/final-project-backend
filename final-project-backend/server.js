const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

require("dotenv/config");
require("./db");
require("./config")(app);

const propertyRoutes = require("./routes/properties.routes");
app.use("/properties", propertyRoutes);

const listingRoutes = require("./routes/listings.routes");
app.use("/listings", listingRoutes);

const indexRoutes = require("./routes/index.routes");
app.use("/api", indexRoutes);

require("./error-handling")(app);

const PORT = process.env.PORT || 5005;

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});

module.exports = app;

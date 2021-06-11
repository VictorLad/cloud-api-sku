"use strict";

const express = require('express');
  fs = require('fs');
  config = require("./config/config");
  API_PREFIX = "/sku"

const port = process.env.APP_PORT || config.server.port;

const app = express();

require("./config/express")(app);

app.use(API_PREFIX, require("./routes"));

// Start the server
const server = app.listen(port, () => {
    console.log("✔ Express server listening on port %d", server.address().port);
});

module.exports = app;
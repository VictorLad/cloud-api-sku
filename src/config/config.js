"use strict";

const configFile = (process.env === "test") ? "config.test.json" : "config.prod.json";

module.exports = require("./" + configFile)
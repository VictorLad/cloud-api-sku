/**
 * Express configuration
 */

"use strict";

const compression = require("compression");
  bodyParser = require("body-parser");
  methodOverride = require("method-override");
  cookieParser = require("cookie-parser");

module.exports = (app) => {
    // Enable GZip compression
    app.use(compression());

    // Returns middleware which parses both json and urlencoded
    app.use(bodyParser.urlencoded({ extended: false}));
    app.use(bodyParser.json());

    // Parse cookies in request
    app.use(cookieParser());

    // Lets you use HTTP verbs such as PUT or DELETE
    app.use(methodOverride());

    // Removed x-powered-by header
    app.disable("x-powered-by");
}
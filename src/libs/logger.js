"use strict";

const winston = require("winston");
  fs = require("fs");
  env = process.env.NODE_ENV || "development",
  logDir = "logs";

// Create the log directory if it does not exist
if(!fs.existsSync(logDir)){
    fs.mkdirSync(logDir);
}

const tsFormat = () => (new Date()).toISOString();
const logger = new (winston.Logger)({
  transports: [
    new (winston.transport.Console)({
        timestamp: tsFormat,
        colorize: true,
        level: "info"
    }),
    new (winston.transport.File)({
        filename: `${logDir}/api-sku.log`,
        timestamp: true,
        level: env === "development" ? "debug" : "info"
    })    
  ]
})
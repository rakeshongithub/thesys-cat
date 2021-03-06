'use strict';
const winston = require('winston');
const loggerConfig = require('./../../server/config.json').logger;

/**
 * Winston logger service
 * @author RKU143 <rkumar148@sapient.com>
 */
const logger = new winston.Logger({
  transports: [
    new (winston.transports.Console)(loggerConfig.console),
  ],
});

module.exports = logger;

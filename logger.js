var config = require('./config/configure');
var winston = require('winston');
require('winston-papertrail').Papertrail;


// Create the Winston PaperTrail transport
// Sends our logs to the PaperTrail cloud logging system
// @author elliott

var logFormat = function(level, message) {
    return '[' + level + '] [' + new Date() + '] ' + message;
};

var loggingTransports = {
  'papertrailLogger': new winston.transports.Papertrail({
    host: 'logs5.papertrailapp.com',
    port: 19151,
    logFormat: logFormat,
    colorize: true
  }),

  'consoleLogger': new winston.transports.Console({
    timestamp: function() {
      return new Date().toString();
    },
    colorize: true
  })
};

var transports = config.get('loggers');

var logger = new winston.Logger({
  transports: transports.map(function(x) { 
    return loggingTransports[x]
  })
});


module.exports = logger;

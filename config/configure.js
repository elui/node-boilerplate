var config = require('nconf');

var confFilename = process.env.NODE_ENV || 'default';
config.use('file', {file: 'config/' + confFilename + '.json'});

module.exports = config;
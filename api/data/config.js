var mongoose = require('mongoose');
var log = require('../helpers/log');

mongoose.connect('mongodb://localhost/scripty');

var connection = mongoose.connection;

connection.on('error',
  log.error.bind(null, 'Error connecting to MongoDB:'));
connection.once('open', function() {
  log.info('Connected to MongoDB.');
});

module.exports = connection;

var testData = require('./population');
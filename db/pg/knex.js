let config = require('../../config')

var environment = config.NODE_ENV || 'dev';
var knexConfig = require('../../knexfile')[environment];

module.exports = require('knex')(knexConfig);
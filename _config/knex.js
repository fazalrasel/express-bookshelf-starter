var environment = process.env.NODE_ENV || 'development';
var config = require('./_config')['DB'][environment];
module.exports = require('knex')(config);
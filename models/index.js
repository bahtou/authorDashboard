var mongoose = require('mongoose');

module.exports.Author = mongoose.model('authors', require('./schemas/author'));

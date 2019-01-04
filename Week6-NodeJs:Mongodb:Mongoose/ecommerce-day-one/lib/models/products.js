var mongoose = require('mongoose');
var schema = mongoose.Schema;

var schema = new schema ({
	name: {type: String, required: true},
	description: {type: String, required: true},
	price: {type: String, required: true},
	active: true
})

module.exports = mongoose.model('products', schema);
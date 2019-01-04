var mongoose = require('mongoose');
var schema = mongoose.Schema;

var schema = new schema({ 
	name: {type: String, required: true, index: true}, 
	email: {type: String, required: true, uniqueness: true}, 
	addresses: [{
		address: {type: String, required: true, uppsercase: true}, 
		city: {type: String, required: true, uppsercase: true},
		state: {type: String, required: true, uppsercase: true},
		zip: {type: String, required: true},
		kind: {type: String, enum: ['Billing', 'Shipping', 'Both'], default: 'Both'}
	}],
	phoneNumber: [{
		homeNumber: String,
		workNumber: String
	}],
	password: String

});


module.exports = mongoose.model('user', schema);
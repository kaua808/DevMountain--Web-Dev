var mongoose = require('mongoose');
var schema = mongoose.Schema;

var schema = new schema({ 
	name: {type: String, required: true, index: true}, //index makes it faster for mongo to search by that
	email: {type: String, required: true, uniqueness: true}, //uniqueness make it so it cant have anything else at that spot(no one can enter the same email)
	addresses: [{
		address: {type: String, required: true, uppsercase: true}, //makes everything uppercase
		city: {type: String, required: true, uppsercase: true},
		state: {type: String, required: true, uppsercase: true},
		zip: {type: String, required: true},
		kind: {type: String, enum: ['Billing', 'Shipping', 'Both'],
			default: 'Both'}
	}],
	age: {type: Number, required: true, min: 13}
}) 

module.exports = mongoose.model('user', schema)
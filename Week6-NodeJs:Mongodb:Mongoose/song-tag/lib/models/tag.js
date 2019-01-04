var mongoose = require('mongoose');
var schema = mongoose.Schema;

var schema = new schema({
	_id: {type: String, required: true, unique: true}
})

module.exports = Mongoose.model('Tag', schema);
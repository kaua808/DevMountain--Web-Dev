var mongoose = require('mongoose');
var schema = mongoose.Schema;
var artist = require('./artist');

var schema = new schema ({
	name: {type: String, index: true, required: true},
	album: {type: String, index: true, required: true},
	genre: String,
	releasedOn: Date,
	isExplicit: Boolean,
	artist: {type: schema.Type.ObjectId, ref: 'Artist'},
	arteest: [artist], 
	tags: [{type: String, ref: 'Tag'}]
});

module.exports = Mongoose.model('Song', schema);
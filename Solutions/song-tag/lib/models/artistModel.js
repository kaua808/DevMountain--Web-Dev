var Mongoose = require('mongoose');
var Song = require('./songModel');

var Schema = Mongoose.Schema;
var schema = new Schema({
    name: {type: String, index: true, required: true},
    bio: String,
    genres: [{type: String, unique: true}]
});

module.exports = Mongoose.model("Artist", schema);
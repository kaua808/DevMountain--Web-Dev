var Mongoose = require('mongoose');
var Artist = require("./artistModel");

var Schema = Mongoose.Schema;
var schema = new Schema({
    name: {type: String, index: true, required: true},
    album: {type: String, index: true, required: true},
    genre: {type: String},
    releasedOn: {type: Date},
    isExplicit: {type: Boolean},
    artist: {type: Schema.Types.ObjectId, ref: "Artist"},
    tags: [{type: Number, ref: "Tag"}]
});

module.exports = Mongoose.model("Song", schema);
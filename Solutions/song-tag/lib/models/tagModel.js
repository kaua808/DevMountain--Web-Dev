var Mongoose = require('mongoose');
var Schema = Mongoose.Schema({
    _id: {type: Number, required: true, unique: true}
});

module.exports = Mongoose.model("Tag", Schema);
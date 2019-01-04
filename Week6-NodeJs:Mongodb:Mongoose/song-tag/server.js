var express = require('express');
var mongoose = require('mongoose');
var app = express();
var mongoUri = 'mongodb://localhost:27017/song-tag';
var bodyParser = require('body-parser');

app.use(bodyParser.json());

artistCtrl = require('./lib/controllers/artistCtrl')

mongoose.connect(mongoUri);
mongoose.connection.once('open', function() {
	console.log ('connection to db ' + mongoUri)
});
//routes go here

app.post('/artist', artistCtrl.post);
app.get('/artist', artistCtrl.get);

app.listen(8000);


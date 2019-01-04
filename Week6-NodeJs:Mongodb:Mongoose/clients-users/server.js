var express = require('express'),
	bodyParser = require('body-parser'),
	mongoose = require('mongoose'),
	user = require('./lib/models/userModel');

var app = express();
var port = 9005
var mongoUri = 'mongodb://localhost:27017/client-user';

mongoose.connect(mongoUri);
mongoose.connection.once('open', function() {
	console.log('connected to database at ' + mongoUri);
});

app.use(bodyParser.json());

app.post('/api/user', function(req, res) {
	console.log("hello")
	//you could use user.save which is a single thing? and a create could save an array if you would like to?
	user.create(req.body).then(function(response){
		res.status(200).json(response);
	},
	function(err){
		res.status(500).json(err);
	})

	// var user = new user(req.body);
	// user.save(function(err, response) {
	// 	if(!err){
	// 		res.status(200).json(user);
	// 	} else {
	// 		res.status(500).json(err);
	// 	}
	// })
})

app.get('/api/user', function(req, res) {
	user.find(function(err, docs) {
		if(!err){
			if(docs.length === 0) {
				res.status(404).send("no documents found")
			} else {
				res.status(200).json(docs);
			}
		} else {
			res.status(500).json(err)
		}
	})
})

app.listen(port);








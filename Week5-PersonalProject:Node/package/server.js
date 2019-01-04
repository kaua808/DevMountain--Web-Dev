var express = require('express');
	bodyParser = require('bodyParser')

var app = express();

app.use(bodyParser.json());

app.use(function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'OPTIONS GET POST');
	res.header('Access-Control-Allow-Headers', 'Origin X-Requested-with, Content-Type, accept');
	next();
})


app.post(function(req, res, next) {
	console.log('do something');
	next();
}, function (req, res, next) {
	console.log('do something else')
	next();
})

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res) {
	res.type('application/json');
	if(req,query.lang) {
		res.json({message: 'hi'})
	} else {
		res.json({message: 'hello'})
	}
})

app.get('/', function(req, res){
	res.type('application/JSON');
	return res.json({message: 'its alright'});
})

app.listen(9999)
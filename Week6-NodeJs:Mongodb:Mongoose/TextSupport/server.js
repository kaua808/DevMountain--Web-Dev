var express = require('express');
var bodyParser = require('body-parser');
var client = require('twilio')('ACCOUNT_SID', 'AUTH_TOKEN');
var Firebase = require('firebase');
var port = 9002;


var app = express();
app.use(express.static(__dirname+'/public'));
app.use(bodyParser.json());
// app.use(firebase) 

app.listen(port);

var firebaseRef = new Firebase('https://text-support-kaleo.firebaseio.com/');

app.get('/', function(req, res) {
	console.log('hi')
});
// var http = require('http');
// var port = 9000;

// var messages = ['hi'];

// var onRequest = function(req, res) {
// 	// console.log(req);
// 	if (req.method === 'GET') {
// 		res.writeHead(200, {
// 			'Connection': 'close',
// 			'Content-Type': 'application/json',
// 			'Access-Control-Allow-Origin': '*'
// 			// 'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
// 			// 'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
// 		});
// 		res.end(JSON.stringify(messages));
// 	} 
// 	if (req.method === 'POST') {
// 		var postData = '';
// 		res.writeHead(200, {
// 			'Connection': 'close',
// 			'Content-Type': 'application/json',
// 			'Access-Control-Allow-Origin': '*'
// 		});
// 		req.on('data', function(chunk) {
// 			postData += chunk.toString();
// 		});
// 		req.on('end', function() {
// 			console.log(postData)
// 			postData = JSON.parse(postData);
// 			messages.push(postData.text)
// 			console.log(messages);
// 			res.end(JSON.stringify(messages));
// 		});
		
		
// 	}
// 	if (req.method === 'OPTIONS') {
// 		res.writeHead(200, {
// 			'Connection': 'close',
// 			'Content-Type': 'application/json',
// 			'Access-Control-Allow-Origin': '*',
// 			'Access-Control-Allow-Methods': 'OPTIONS GET POST',
// 			'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
// 		});
// 		res.end(JSON.stringify(messages));
// 	} 
// }
// http.createServer(onRequest).listen(port);
// console.log('listening on port ' + port);


var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var port = 9000;

app.listen(port);

var messages = []

app.use(bodyParser.json());

app.use(function(req, res, next) {
		res.header('Access-Control-Allow-Origin', '*');
		res.header('Access-Control-Allow-Methods', 'OPTIONS GET POST');
		res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
		next();
})

app.get('/', function(req, res) {
	res.status(200).json(messages)
});

app.post('/', function(req, res) {
	messages.push(req.body.text);
	res.status(200).json(messages);
})



console.log('listening at ' + port)




var http = require('http');
var port = 8887;



var messages = ["ope, howzit", "brah, better wise up", "no can", "can"]

var onRequest = function(req, res){
	if (req.method === 'GET') {
		res.writeHead(200, {
			'Connection': 'close',
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
			'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
		});
		res.end(JSON.stringify({message: randomMessage(messages)}));
	}
}
http.createServer(onRequest).listen(port);

var randomMessage = function(array) {
	var num = Math.floor(Math.random()*(array.length));
	return array[num]
}

console.log('listening on port ' + port);

// http.createServer(function(req, res) {

// }).listen(port);

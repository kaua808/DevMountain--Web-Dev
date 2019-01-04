

var onRequest = function(req, res) {
	res.writeHead(200, {
		'Connection': 'close',
		'Content-Type': 'text/html',
		'Access-Control-Allow-Origin': '*'
	});
	res.end(JSON.stringify({message: "hello world"}));
}

var smurfs = require('./smurfs');
smurfs.doSomething();
smurfs();

var http = require('http');
http.createServer(onRequest).listen(12200);
console.log('listen on port 12200');
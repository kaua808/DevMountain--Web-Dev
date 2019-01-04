var Express = require('express');
var App = Express();
var Server = require('http').Server(App);
var io = require('socket.io')(Server);
var BodyParser = require('body-parser');

Server.listen(80);

var port = 9001;

App.use(Express.static(__dirname + '/public'));
App.use(BodyParser.json())

var messages = [];


App.post('/api/message', function(req, res){
	messages.push(req.body.message);
	io.emit('new-message', req.body.message);
	res.end();
});

App.get('/api/message', function(req, res){
	res.json(messages);
})



io.on('connection', function(){
	console.log('Connected!');
})

App.listen(port, function(){
	console.log('Now listening on port: ' + port);
})
var express = require('express');

var app = express();
app.use(express.static(__dirname+'/public'));

App.get('/api/current_weather', function(req, res) {
	return res.json({current_weather: "partly cloudy"});
});

app.listen(8080);
var express = require('express'),
	cors = require('cors'),
	bodyParser = require('body-parser'),
	app = express(),
	port = 9004;

app.use(express.static(__dirname+'/public'));
app.use(bodyParser.json());
app.use(cors());

app.get('/interest_rate', function(req, res){
	var num = +(Math.random() * 20).toFixed(2);
	var random = {
		"rate": num
	}
	res.status(200).send(random);
})


console.log('listening on port ' + port);
app.listen(port);
var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');

var app = express();
app.use(express.static(__dirname+'/public'));
app.use(bodyParser.json());


app.post('/api/send_text_message', function(req, res) {
	request.post('https://accountid:offtoken(which well tell twilio who we are@then twilio api', {
		form: {
			to: (808) 256-7355,
			from: "+(808) 256-7355",
			body: req.body.message
		}
	}, function(err, response, body) {
		if (err) {
			return.res.status(500).end();
		}
		return res.status(200).end();
	});
});

app.listen(9999);
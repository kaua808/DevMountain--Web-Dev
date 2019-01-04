var express = require('express');
var contacts_module = require('./api/contacts');
console.log(contacts_module.contacts);

var app = express();
app.use(express.static(__dirname+'/public'));

app.get('/api/contacts', function(req, res) {
	return res.json(contacts_module.contacts);
});

app.get('/api/contacts/:id', function(req, res) {
	for(var i = 0; i<contacts_module.contacts.length; i++) {
		if (contacts_module.contacts[i].id === Number(req.params.id)) {
			return res.json(contacts_module.contacts[i]);
		}
	}
});

app.listen(8080);
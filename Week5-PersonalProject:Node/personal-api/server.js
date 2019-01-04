var express = require('express'),
	app = express(),
	cors = require('cors');


app.use(cors());

var user = {
	name: 'Kaleo',
	location: 'Provo',
	hobbies: ['games', 'sports'],
	occupations: ['lifeguard', 'technician']
}



app.get('/name', function(req, res) {
	res.status(200).json(user.name); 
})



app.listen(8080);



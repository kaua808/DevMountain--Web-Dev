var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var passport = require('passport');
var TwitterStrategy = require('passport-twitter').Strategy;

passport.use(new TwitterStrategy({
	consumerKey: 'qgT3gYCqZCTbyL5EVzcOMVL8R',
	consumerSecret: 'Qkp6wOagy4pnC87kjBlwEAbFQstLrlFADvpitZ4tYNdc9UjE7G',
	callbackURL: 'http://localhost:8080/auth/twitter/callback'
}, function(token, tokenSecret, profile, done) {
	//create/update/lookup db record
	done(null, profile);
}));

var app = express();
app.use(express.static(__dirname+'/public'));
app.use(session({
	secret: 'lakjs$#%lkasjr23940293842lkjaldsf'
}));
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function(user, done) {
	done(null, user);
});
passport.deserializeUser(function(obj, done) {
	done(null, obj);
});

app.get('/auth/twitter', passport.authenticate('twitter'));
app.get('/auth/twitter/callback', passport.authenticate('twitter', {
	successRedirect: '/',
	failureRedirect: '/login.html'
}));

var isAuthed = function(req, res, next) {
	if (!req.isAuthenticated()) {
		return res.redirect('/login.html');
	}
	next();
}

app.get('/', isAuthed, function(req, res) {
	return res.sendFile(__dirname+'/public/home.html');
});

app.listen(8080);
var express = require('express');
var session = require('express-session');
var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;

var app = express();
// some examples....
// var port = process.env.PORT || 8080;
// var secretKey = process.env.SECRET || "I dont care"
//middleware

app.use(session({secret: '348207%4238704230847$'})); //does it matter if we dont know what we put here?
app.use(passport.initialize());
app.use(passport.session());

//define strategy
passport.use(new FacebookStrategy ({
	clientID: '354621308063515',
	clientSecret: '7623a22657ff7a6c345e1c2dbed75e1a',
	callbackURL: 'http://localhost:9003/auth/facebook/callback' //explain this....
}, function(token, refreshToken, profile, done) {
	return done(null, profile)
}));

passport.serializeUser(function(user, done) {
	done(null, user);
});
passport.deserializeUser(function(obj, done) {
	done(null, obj);
});

app.get('/auth/facebook', passport.authenticate('facebook'));
app.get('/auth/facebook/callback', passport.authenticate('facebook', {
	successRedirect: '/me',
	failureRedirect: '/login.html'
}))



app.get('/me', function(req, res) {
	res.status(200).json(req.user);
})

app.listen(9003);

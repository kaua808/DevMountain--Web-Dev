var express = require('express');
	session = require('express-session');
	passport = require('passport');
	githubStrategy = require('passport-github').Strategy;

var app = express();

app.use(session({secret: 'something secret'}));
app.use(passport.initialize());
app.use(passport.session());

app.use(express.static(__dirname + '/public'));

passport.use(new githubStrategy ({
	clientID: '0bdd7373a96df8439c84',
	clientSecret: '3e35c8dffbc4d58b28ac83222320654be7df6170',
	callbackURL: 'http://localhost:9004/auth/github/callback'
}, function(token, refreshToken, profile, done) {
	return done(null,profile)
}));

passport.serializeUser(function(user, done) {
	done(null, user);
});
passport.deserializeUser(function(obj, done) {
	done(null, obj);
});

app.get('/auth/github', passport.authenticate('github'));
app.get('/auth/github/callback', passport.authenticate('github', {
	successRedirect: '/me',
	failureRedirect: 'login.html'
}));

app.get('/api/github/following', function(req,res) {
	// res.status(200).json(req.user.following);
	var requireAuth = function(req, res, next) {
  if (!req.isAuthenticated()) {
    return res.status(403).end();
  }
  return next();
}
})









app.listen(9004);
var app = angular.module('textSupport', ['ngRoute', 'firebase'])

app.config(function($routeProvider) {
	$routeProvider 
		.when('/', {
			templateUrl: 'js/welcome/welcome.html',
			controller: 'welcomeCtrl'
		})
		.when('/support', {
			templateUrl: 'js/support/support.html',
			controller: 'supportCtrl'
		})
})
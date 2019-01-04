var app = angular.module('coderFriends', ['ngRoutes']);

app.config(function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'templates/login.html',
			controller: 'js/loginCtrl'
		})
		.when('/home', {
			templateUrl: 'templates/home.html',
			controller: 'js/homeCtrl'
		})
		// .when('/friend/:github_username', {
		// 	templateUrl: '/templates/friend.html'
		// })
		.otherwise('/');
})


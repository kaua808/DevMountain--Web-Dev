var app = angular.module('rtfmApp');

app.controller('loginCtrl', function($scope, envService, $location) {

$scope.login = function(username) {
	envService.saveUserName(username);
	console.log(envService.getUserName());
	$location.path('/threads')
}



});
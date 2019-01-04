var app = angular.module('rtfmApp');

app.controller('threadCtrl', function($rootScope, $scope, threadService, envService, $location, threadsThing) {

$scope.threads = threadsThing.$asArray();



$scope.logout = function() {
	envService.logOut();
	$location.path('/login');
};	

$scope.createThread = function(title) {
	$scope.threads.$add({ 
		username: $rootScope.user,
		title: title
	})
}
});


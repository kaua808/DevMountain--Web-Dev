// var app = angular.module('whetherApp');


// app.controller('homeCtrl', function($scope) {

// })


angular.module('weatherApp').controller('homeCtrl', function($scope, $location) {
	$scope.changeRoute = function() {
		$location.path('/weather/'+$scope.name)
	}
	$scope.name = "Kaleo"
	$scope.logger = function() {
		console.log('Up Town funk you up');
	}


});
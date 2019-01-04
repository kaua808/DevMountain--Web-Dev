var app = angular.module('parseQ');

app.controller('mainCtrl', function($scope, parseService) {
	$scope.postData = function() {
		parseService.postData($scope.question).success(function() {
			$scope.getParseData();
			$scope.question = '';
		})
		.error(function(err) {
			console.log(err);
		})
	}

	$scope.getParseData = function() {
		parseService.getData().then(function(res) {
			$scope.questions = res;
			console.log(res);
		}) 
	}


})
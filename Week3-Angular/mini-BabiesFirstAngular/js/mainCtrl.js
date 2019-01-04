var app = angular.module("friendsList");

app.controller("mainCtrl", function($scope){
	$scope.friends = ["Aaron", "Ann", "Roy"];

	$scope.addFriends = function(){
		$scope.friends.push($scope.adder);
		$scope.adder = '';
	}
});


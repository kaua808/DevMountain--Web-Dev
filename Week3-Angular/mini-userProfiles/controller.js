var app = angular.module("userProfile");

app.controller("mainController", function($scope, mainService){
$scope.getUsers = function() {
	$scope.users = mainService.getUsers();
}
console.log("ope");
 $scope.getUsers();
});
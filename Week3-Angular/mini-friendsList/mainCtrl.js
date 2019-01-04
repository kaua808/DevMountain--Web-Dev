var app = angular.module("FriendsApp");

app.controller('mainCtrl', function($scope, friendService) {
	$scope.friends = friendService.getFriend();

	$scope.addFriend = function() {
		friendService.addFriend($scope.newFriend);
		$scope.newFriend = '';
	}	
})
var app = angular.module('rtfmApp');

app.controller('singleThreadCtrl', function($scope, threadRef, commentsRef, $rootScope) {
	var thread = threadRef.$asObject();

	thread.$bindTo($scope, 'thread');

	$scope.comments = commentsRef.$asArray();

	$scope.createComment = function(username, text) {
		$scope.comments.$add({
			username: $rootScope.user,
			text: text
		}); $scope.newCommentText = ''
	}
});
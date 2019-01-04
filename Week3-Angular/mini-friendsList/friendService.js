var app = angular.module('FriendsApp');

app.service('friendService' function() {
	var friends = ['jess', 'kaleo', 'aaron'];

	this.addFriend = function(friend) {
		friends.push(friend);
	};

	this.getFriend = function() {
		return friends;
	}
});
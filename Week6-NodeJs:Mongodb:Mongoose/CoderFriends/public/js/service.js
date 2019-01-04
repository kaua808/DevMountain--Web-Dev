var app = angular.module('coderFriends');

app.service('service', function($http, $q) {
	
	this.getstuff = function() {
		var deferred = $q.defer();
		$http.get('/api/github/following')
	}
})


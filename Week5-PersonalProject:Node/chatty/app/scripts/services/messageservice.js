'use strict';

var app = angular.module('chattyApp');
  
app.service('messageService', function($http, $q) {

this.getMessages = function () {
	var deferred = $q.defer();
	$http.get('http://localhost:9000').then(function(res) {
		deferred.resolve(res)
	})
	return deferred.promise;
}

this.postMessage = function(newMessage) {
	var deferred = $q.defer();
	$http.post('http://localhost:9000', {text: newMessage}).then(function(res) {
		deferred.resolve(res)
	})
	return deferred.promise
}
});

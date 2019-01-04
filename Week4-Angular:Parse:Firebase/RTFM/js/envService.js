var app = angular.module('rtfmApp')
  
app.service('envService', function EnvironmentService($window) {
    this.getEnv = function() {
    	return window.env;
    }

    this.saveUserName = function(username) {
    	$window.localStorage.setItem('username', username);

    }

    this.getUserName = function() {
    	return $window.localStorage.getItem('username')
    }

    this.logOut = function() {
    	return $window.localStorage.removeItem('username');
    }
    // return {
    // 	getEnv: function () {
    //     	return $window.env;
    //   	}
    // }
});
var app = angular.module('parseQ');

app.factory('httpRequestInterceptor', function () {
	return {
        request: function (config) {
        	config.headers = {'X-Parse-Application-Id': 'KHaMYkMIMaAt4sKjAX2NOzwnosc4P2rg59NspfxV', 'X-Parse-REST-API-Key': 'RNJym6n6LxE2smE12zgq3EVK8y3P0hYClm6RdujU'}
        	return config;
        }
    };
});
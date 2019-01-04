var app = angular.module('rtfmApp')
  
app.service('threadService', function($firebase, envService) {
	var firebaseurl = envService.getEnv().firebase;

	this.getThreads = function() {
		console.log(firebaseurl + '/threads')
		return $firebase(new Firebase(firebaseurl + '/threads'))
	}

	this.getThread = function(id) {
		return $firebase(new Firebase(firebaseurl + '/threads/' + id))
	}

	this.getComments = function(id) {
		return $firebase(new Firebase(firebaseurl + '/threads/' + id + '/comments'));
	}

});

	//the following are just examples.....

		// var url = envService.getEnv().firebase;
		// var ref = new Firebase(url); //do this if you was just doing jQuery.  try to never use ref always try to us thing
		// var thing = $firebase(ref); // do this when doing angular
		// var thingObject = thing.$asObject();
		// var thingArray = thing.$asArray();
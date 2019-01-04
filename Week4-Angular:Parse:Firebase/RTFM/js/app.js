var app = angular.module('rtfmApp', ['firebase', 'ngRoute'])

app.config(function($routeProvider, $httpProvider){

 	$routeProvider
 		.when ('/login', {
 			templateUrl: 'js/login/login.html',
 			controller: 'loginCtrl'
 		})
 		.when ('/threads', {
 			templateUrl: 'js/threads/thread.html',
 			controller: 'threadCtrl',
 			resolve: {
 				threadsThing: function(threadService){
 					return threadService.getThreads();
 				}
 			}
 		})
 		.when ('/threads/:threadId', {
 			templateUrl: 'js/threads/singleThread.html',
 			controller: 'singleThreadCtrl',
 			resolve: {
 				threadRef: function(threadService, $route){
 					return threadService.getThread($route.current.params.threadId);
 				},
 				commentsRef: function(threadService, $route){
 					return threadService.getComments($route.current.params.threadId);
 				}
 			}
 		})
 		.otherwise ({
 			redirectTo: '/login'
 		})


});

app.run(function($rootScope, $location, envService) {
	$rootScope.$on('$routeChangeStart', function(event, next, current) {
		if(envService.getUserName()) {
			$rootScope.user = envService.getUserName();
		} else {
			$location.path('/login');
		}
	})
});



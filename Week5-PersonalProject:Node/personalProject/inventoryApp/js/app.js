var app = angular.module('inventoryApp', ['firebase', 'ngRoute', 'ngGrid']);

app.config(function($routeProvider) {
	$routeProvider
		.when ('/login', {
			templateUrl:'js/login/login.html',
			controller: 'loginCtrl',
		})
		.when ('/mainPage', {
			templateUrl: 'js/mainPage/mainPage.html',
			controller: 'mainPageCtrl',
			resolve: {
 				itemsRef: function(service, $route){
 					return service.addItem();
 				},
				stagedRef: function(service, $route) {
					return service.stagedInventory();
				}
 			}
		})
		.when ('/staged', {
			templateUrl: 'js/staged/staged.html',
			controller: 'stagedCtrl',
			resolve: {
				stagedRef: function(service, $route) {
					return service.stagedInventory();
				}
			}
		})

})
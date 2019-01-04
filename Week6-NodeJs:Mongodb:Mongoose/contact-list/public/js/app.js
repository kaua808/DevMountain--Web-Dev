var app = angular.module('Contacts', ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider
		.when('/contacts', {
			templateUrl: '/templates/contacts.html',
			controller: 'ContactsCtrl',
			resolve: {
				contacts: function(ContactsService) {
					return ContactsService.list();
				}
			}
		})
		.when('/contacts/:id', {
			templateUrl: '/templates/single-contact.html',
			controller: 'SingleContactCtrl',
			resolve: {
				contact: function(ContactsService, $route) {
					return ContactsService.get($route.current.params.id);
				}
			}
		})
		.otherwise({
			redirectTo: '/contacts'
		});
});
angular.module('Contacts').factory('ContactsService', function($http, $q) {
	return {
		list: function() {
			var deferred = $q.defer();
			$http({
				method: 'GET',
				url: '/api/contacts'	
			}).then(function(response) {
				deferred.resolve(response.data);
			});
			return deferred.promise;
		},
		get: function(contact_id) {
			var deferred = $q.defer();
			$http({
				method: 'GET',
				url: '/api/contacts/'+contact_id	
			}).then(function(response) {
				deferred.resolve(response.data);
			});
			return deferred.promise;
		}
	};
})
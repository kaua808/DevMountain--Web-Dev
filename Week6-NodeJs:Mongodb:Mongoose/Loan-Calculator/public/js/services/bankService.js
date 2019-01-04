var app = angular.module('LoanCalculator');

app.service('bankService', function($http) {

	this.getInterestRate = function(something) {
		return $http.get("/api/interest_rate").then(function(res) {
			return res.data
		});
	}
})
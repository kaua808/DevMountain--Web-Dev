var app = angular.module('loanApp');

app.service('bankService', function($http){
	this.getInterest = function(){
		return $http({
			method: 'GET',
			url: './interest_rate'
		})/*.then(function(resolve){
			return resolve;
		})*/
	}
	this.calculatePayments = function(p, r, t, cb){
		var years = (t/12);
		var totalAmount = (p + (p*(r / 100)*years));
		var payments = (totalAmount / t);
		cb(totalAmount, payments);
	}
});
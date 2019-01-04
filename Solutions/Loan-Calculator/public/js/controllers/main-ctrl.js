var app = angular.module('loanApp');

app.controller('MainCtrl', function($scope, bankService){
	$scope.term = 48;
	bankService.getInterest().then(function(data){
		$scope.interest_rate = data.data.rate;
	})
	$scope.calculatePayment = function(){
		bankService.calculatePayments(Number($scope.principal), $scope.interest_rate, $scope.term, function(totalAmount, payments){
			$scope.monthly_payment = payments.toFixed(2);
			$scope.totalAmount = totalAmount.toFixed(2);
		})
	}
});
var app = angular.module("quoteBook");

app.controller("mainCtrl", function($scope, dataService) {
	$scope.quotes = dataService.getData();

	$scope.addQuote = function() {
		var newQuoteObjet = {
			text: $scope.newText,
			author: $scope.newAuthor
		}; 
		dataService.addData(newQuoteObjet);
		$scope.newText = '';
		$scope.newAuthor = '';
	};

	$scope.removeData = function(deleteQuote) {
		dataService.removeData($scope.deleteQuote)
		$scope.deleteQuote = '';
	};

	


});
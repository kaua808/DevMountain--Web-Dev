var app = angular.module('weatherApp');

app.directive('aDirective', function() {

})

angular.module('weatherApp').directive('aDirective', function(){
	return {
		restrict: 'E',
		templateUrl: 'directive/aDirective.html',
		scope: {
			//@, =, &
			message: '@', //binds a string       //the "message",'variable', and 'funk' dont matter.  I can name those whatever I want
			variable: '=', //binds a variable
			funk: '&' //the & binds a function
		},
		link: function(scope, elem, attrs){
			elem.click(function() {
				scope.getStuff();
			})
		},
		controller: function($scope, $http) {
			$scope.getStuff = function() {
				$http.get("http://api.openweathermap.org/data/2.5/weather?lat=40.2&lon=-40")
				.then(function(data){
					console.log(data.data);
				})
			}
		},
		transclude: true
	}

})


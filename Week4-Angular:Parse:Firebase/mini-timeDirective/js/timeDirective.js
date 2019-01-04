app.directive('showTime', function() {
	return { 
		template: '<div> The Current time is {{time}}</div>',
		restrict: 'E',
		link: function(scope, elem, attrs) {
			var currentTime = new Date();
			scope.time = currentTime.toString();	
		}
	}
})
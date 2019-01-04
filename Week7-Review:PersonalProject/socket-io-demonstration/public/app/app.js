angular.module('socketChat', [])




	.controller('mainCtrl', function($scope, chatService){
		$scope.sendMessage = function(){
			chatService.sendMessage($scope.newMessage)
				.then(function(res){
					console.log(res)
					$scope.newMessage = '';
					updateMessages();
				})
		}

		var updateMessages = function(){
			chatService.getMessages()
				.then(function(res){
					console.log(res);
					$scope.messages = res.data;
				})
		}

		var socket = io.connect('http://localhost');

		socket.on('connect', function(){
			console.log('connected!');
		});

		socket.on('new-message', function(message){
			$scope.messages.push(message);
			$scope.$apply();
			updateMessages();
		});

		updateMessages();

	})







	.service('chatService', function($http){
		this.sendMessage = function(message){
			return $http({
				method: 'POST',
				url: '/api/message',
				data: {message: message}
			})
		}
		this.getMessages = function(){
			return $http({
				method: 'GET',
				url: '/api/message'
			})
		}
	})
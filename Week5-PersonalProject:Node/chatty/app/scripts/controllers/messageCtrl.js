'use strict';

var app = angular.module('chattyApp');
  
app.controller('messageCtrl', function ($scope, messageService) {
    $scope.messages = [];
    messageService.getMessages().then(function(res) {
    	$scope.messages = res.data;
    }) 

    $scope.addMessage = function() {
    messageService.postMessage($scope.newMessage).then(function(res){
        console.log(res);
    	$scope.messages = res.data;
    	$scope.newMessage = '';

     })
    
    }


});

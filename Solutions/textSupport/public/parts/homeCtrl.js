var app = angular.module("text");

app.controller("homeCtrl", function($scope, $firebase, service){
    var sync = $firebase(new Firebase("https://textsupportdan.firebaseio.com/number"));

    sync.$asArray().$loaded().then(function(array) {
        console.log(array);
        $scope.texts = array;
    });

    $scope.respond = function(id){
        service.respond().then(function(data){
            console.log(data);
        }, function(err){
            console.log(err);
        })
    }




});
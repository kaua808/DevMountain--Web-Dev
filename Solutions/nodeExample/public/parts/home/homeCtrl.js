var app = angular.module("nodeExample");

app.controller("homeCtrl", function($scope, nodeService){

    $scope.display = "Nothing";


    $scope.get = function(){
        $scope.display = "Loading";
        nodeService.get().then(function(data){
            $scope.display = data;
        })
    };

    $scope.post = function(){
        $scope.display = "Loading";
        nodeService.post().then(function(data) {
            $scope.display = data;
        });
    };

    $scope.put = function(){
        $scope.display = "Loading";
        nodeService.put().then(function(data) {
            $scope.display = data;
        })
    };

    $scope.erase = function(){
        $scope.display = "Loading";
        nodeService.erase().then(function(data) {
            $scope.display = data;
        })
    };

    $scope.getOtherThing = function(){
        $scope.display = "Loading";
        nodeService.getOtherThing().then(function(data) {
            $scope.display = data;
        })
    };
});
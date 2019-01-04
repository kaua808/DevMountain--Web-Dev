var app = angular.module("text", ['ngRoute', 'firebase']);

app.config(function($routeProvider){
    $routeProvider
        .when("/", {
            templateUrl: "parts/home.html",
            controller: "homeCtrl"
        })
});
var app = angular.module("nodeExample", ["ngRoute"]);

app.config(function($routeProvider){
    $routeProvider
        .when("/", {
            templateUrl: "parts/home/home.html",
            controller: "homeCtrl"
        })
});
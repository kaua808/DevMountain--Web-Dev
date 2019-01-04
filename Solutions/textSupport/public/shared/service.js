var app = angular.module("text");

app.service("service", function($http){


    this.respond = function(id){
        return $http.post("/respond", {to: id})
    }
});
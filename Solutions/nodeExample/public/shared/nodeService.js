var app = angular.module("nodeExample");
app.service("nodeService", function($http){

    this.get = function(){
        return $http.get("/node")
    };
    this.post = function(){
        return $http.get("/node")
    };
    this.put = function(){
        return $http.get("/node")
    };
    this.erase = function(){
        return $http.get("/node")
    };
    this.getOtherThing = function(){
        return $http.get("/node/other")
    };
});
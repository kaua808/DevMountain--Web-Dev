var app = angular.module('itunes');

app.service('itunesService', function($http, $q){
  //This service is what will do the 'heavy lifting' and get our data from the iTunes API.
  //Also not that we're using a 'service' and not a 'factory' so all your method you want to call in your controller need to be on 'this'.

  //Write a method that accepts an artist's name as the parameter, then makes a 'JSONP' http request to a url that looks like this
  //https://itunes.apple.com/search?term=' + artist + '&callback=JSON_CALLBACK'
  //Note that in the above line, artist is the parameter being passed in. 
  //You can return the http request or you can make your own promise in order to manipulate the data before you resolve it.

  this.getSongData = function(artist) {
  	return $http ({
  		method: 'JSONP',
  		url: 'https://itunes.apple.com/search?term=' + artist + '&callback=JSON_CALLBACK'
  	})
  }


// this is if you wanted to put all the heavy logic in the service. if I use this I would need to twek the control a bit cause I didnt d it for this example

//   this.getSongData = function(artist) {
//   	var deferred = $q.defer();
//   	$http ({
// 		method: 'JSONP',
//   		url: 'https://itunes.apple.com/search?term=' + artist + '&callback=JSON_CALLBACK'
//   	}).then(function(res){
//   		var data = res.data.result;
//   		var newArray[];
//   	for (var i = 0; i < data.length; i++) {
//     	var obj = {
//      		 AlbumArt: darta[i].artworkUrl100,
//        		 Artist: darta[i].artistName,
//        		 Collection: darta[i].collectionName,
//         	 CollectionPrice: darta[i].collectionPrice,
//         	 Play: darta[i].previewUrl,
//         	 Type: darta[i].kind
//     }
//     newArray.push(obj)
//   };
// }
//   		deferred.resolve	
//   	}.function(err){
//   		deferred.reject(err);
//   	})
//   	return deferred.promise
//   }

    // this.getArtist = function() {
    // 	    return $http({
    // 	   	method: "JSONP",
    // 	   	url: 'google.com'
    // 	    });
    // 	var deferred = $q.defer();

    // 	$http({
    // 		mehod: 'JSONP',
    // 		url: 'google.com'
    // 	}).success(function(data) {
    // 		var result = data.result;

    // 		console.log(data);

    // 		deferred.resolve(result);
    // 	}).error(function(error) {
    // 		deferred.reject(error);
    // 	})
    	

    // 	return deferred.promise;
    // }
});




// this.getArtist = function(getArtist)




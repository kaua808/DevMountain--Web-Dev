var Artist = require('./../models/artist');
var q = require('q');

module.exports.save = function(artist) {
	var deffered = q.defer();
	Artist(artist).save(function(err, res) {
		if(err === null) {
			console.log(err);
			deffered.resolve(res);
		} else {
			deffered.reject(err);
		}
	}) 
	return deffered.promise
}

module.exports.find = function(query) {
	var deferred = q.defer();
	Artist.find(query, function(err, results){
		if(!err){
			deferred.resolve(results);
		} else {
			deferred.reject(err);
		}
	})
	return deferred.promise;
}
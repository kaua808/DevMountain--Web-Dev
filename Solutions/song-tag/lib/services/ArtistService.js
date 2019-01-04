var ArtistModel = require('./../models/artistModel');
var q = require('q');

module.exports.save = function(artist){
    var dfd = q.defer();
    ArtistModel(artist).save(function(err, res){
        if(!err){
            dfd.resolve(res);
        } else {
            dfd.reject(err);
        }
    });
    return dfd.promise;
};

module.exports.find = function(query){
    var dfd = q.defer();
    ArtistModel.find(query, function(err, results){
        if(!err){
            dfd.resolve(results)
        } else {
            dfd.reject(err)
        }
    });
    return dfd.promise;
};

module.exports.findOne = function(query){
    var dfd = q.defer();
    ArtistModel.findOne(query, function(err, results){
        if(!err){
            dfd.resolve(results)
        } else {
            dfd.reject(err)
        }
    });
    return dfd.promise;
};
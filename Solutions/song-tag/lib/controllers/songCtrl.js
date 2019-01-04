var SongService = require("./../services/SongService");
var ArtistService = require("./../services/ArtistService");

module.exports.post = function(req, res){
    ArtistService.findOne(req.body.artist).then(function(artist){
        req.body.artist = artist._id;
        SongService.save(req.body).then(function(result){
            res.status(200).json(result);
        }, function(err){
            res.status(400).json(err);
        });
    }, function(err){

    })
};

module.exports.get = function(req, res){
    SongService.find(req.query).then(function(response){
        res.status(200).json(response);
    }, function(err){
        res.status(400).json(err);
    })
};
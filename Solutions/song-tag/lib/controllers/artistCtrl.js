var ArtistService = require('../services/ArtistService');

module.exports.post = function(req, res){
    ArtistService.save(req.body)
        .then(function(response){
            res.status(200).json(response);
        }, function(err){
            res.status(400).json(err)
        })
};

module.exports.get = function(req, res){
    ArtistService.find(req.query)
        .then(function(response){
            if(response.length){
                res.status(200).json(response);
            } else {
                res.status(200).json("Nothing");
            }
        }, function(err){

        })
};
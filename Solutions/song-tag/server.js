var express = require('express');
var app = express();
var Mongoose = require('mongoose');
var MongoUri = "mongodb://localhost:27017/song-tag";
var bodyParser = require('body-parser');

app.use(bodyParser.json());

//Controllers

var ArtistCtrl = require('./lib/controllers/artistCtrl');
var SongCtrl = require("./lib/controllers/songCtrl");

Mongoose.connect(MongoUri);
Mongoose.connection.once("open", function(){
    console.log("Connected to db "+MongoUri)
});

//routes go here

app.listen(8000);

//Artist end points
app.post("/artist", ArtistCtrl.post);
app.get("/artist", ArtistCtrl.get);

app.post("/song", SongCtrl.post);
app.get("/song", SongCtrl.get);

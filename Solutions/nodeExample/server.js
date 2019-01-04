var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.listen(8888, function(){
    console.log("Running on 8888")
});


app.get("/node", function(req, res){

});

app.post("/node", function(req, res){

});

app.put("/node", function(req, res){

});

app.delete("/node", function(req, res){

});

app.get("/node/other", function(req, res){

});


var express = require("express"),
    bodyParser = require("body-parser"),
    app = express(),
    client = require('twilio')('AC4320a908cf0deb9cd33090d71f91d8e8', '413f26da7daf2a7058054a050e1f833c'),
    Firebase = require('firebase'),
    ref = new Firebase("https://textsupportdan.firebaseio.com/number");


app.use(bodyParser.json());

app.use(express.static(__dirname + "/public"));

app.listen(9999, function(){
    console.log("Listening on 9999");
});

app.post("/respond", function(req, res){
    client.messages.create({
        body: "Jenny please?! I love you <3",
        to: "+18016160347",
        from: "+13854744766"
    }, function(err, message) {
        if(!err){
            ref.child(" 18016160347").push({body: "Jenny please!?", to: "+18016160347", from:"q2334" });
            res.status(200).json(message);
        } else {
            res.status(418).json(err);
        }
    });
});

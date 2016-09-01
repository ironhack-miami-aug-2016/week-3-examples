var kirbyDance = require("kirby-dance");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var express = require("express");


mongoose.connect("mongodb://localhost/chicken");


var Chicken = mongoose.model("Chicken", { spice_level: String, meat_type: String, bone_status: String });


var app = express();


app.use(express.static('public'));
app.set("view engine", "ejs");

var urlencodedParser = bodyParser.urlencoded({ extended: false })


// respond with "hello world" when a GET request is made to the homepage
app.get("/", function(request, response) {
  Chicken.find(function (theError, chickensArray) {
    if (theError) {
      response.send("Error. Beep boop.");
    }

    else {
      response.render("home", { chickens: chickensArray });
    }
  });

});


app.get("/chicken/new", function (request, response) {
  response.render("new_chicken");
});

app.post("/chicken", urlencodedParser, function (request, response) {
  var newChicken = new Chicken({
    spice_level: request.body.spice_level,
    meat_type: request.body.meat_type,
    bone_status: request.body.bone_status
  });

  newChicken.save(function (theError) {
    if (theError) {
      response.redirect("/chicken/new");
    }

    else {
      response.redirect("/");
    }
  });
});


app.get("/kirbies/:amount", function (request, response) {
  var amount = Number(request.params.amount);
  var kirbies = kirbyDance(amount);

  response.render("kirbies", { viewKirbies: kirbies });
});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

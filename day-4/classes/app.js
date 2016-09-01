// app.js

"use strict";


// require_relative("lib/animal.rb")
var Animal = require("./lib/animal.js");


// dymitri = Animal.new("Dymitri", "Huff...")
var dymitri = new Animal("Dymitri", "Huff...");

// dymitri.make_noise
dymitri.makeNoise();

// dymitri.shout
dymitri.shout();


// chewie = Animal.new("Chewie", "Woof")
var chewie = new Animal("Chewie", "Woof");

// chewie.make_noise
chewie.makeNoise();

// chewie.shout
chewie.shout();

"use strict";

var PitFight = require("./lib/pit-fight.js");
var Viking = require("./lib/viking.js");
var Saxon = require("./lib/saxon.js");
var War = require("./lib/war.js");


var viking1 = new Viking("Nizar", 200, 30);
var viking2 = new Viking("Josh", 150, 20);

console.log("");


var thisPitFight = new PitFight(viking1, viking2, 10);
thisPitFight.initiate();


console.log("");
console.log("~ Intermission ~");


var vikings = [
  new Viking("Ase", 30, 6),
  new Viking("Dagmar", 100, 10),
  new Viking("Ake", 92, 20),
  new Viking("Birger", 125, 25),
  new Viking("Carr", 73, 3),
  new Viking("Dagfinn", 55, 2),
  new Viking("Elof", 7, 1),
  new Viking("Felman", 213, 30),
  new Viking("Gustav", 200, 3),
];

var saxonTown = [];
var randomInteger = require("./lib/random-integer");

for (var i = 1; i <= 100; i++){
  var health = randomInteger(1, 20);
  var strength = randomInteger(1, 20);
  var theSaxon = new Saxon(health, strength);
  saxonTown.push(theSaxon);
}

var war = new War(vikings, saxonTown)
war.initiate();

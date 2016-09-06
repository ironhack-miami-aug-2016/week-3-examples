"use strict";


var read = require("read");


var questionStrings = [
  "Do you find it difficult to introduce yourself to other people?",
  "Do you initiate conversations with other people often?",
  "Do you feel superior to other people?",
  "Do you keep your work spaces tidy?",
  "Do you enjoy being the center of attention?",
  "Do you pick a piece of food and then put it back?",
  "Did you lie in this personality test?"
];

function theCallbackFunction (theError, theAnswer) {
  console.log("");
  console.log(`ANSWER #${i + 1} RECORDED`);
  console.log(`Answer: ${theAnswer}`);

    // for (...; ...; i += 1) {
    //                     |
    // ---------------------
    // |
  i += 1;

    // for (...; i < questionStrings.length; ...) {
    //                    |
    //         ------------
    //         |
  if (i < questionStrings.length) {
    var options = { prompt: `Question #${i + 1}: ${questionStrings[i]}` };

    console.log("");
    read( options, theCallbackFunction );
  }

  else {
    console.log("");
    console.log("Thanks for answering this personality test!");
    console.log("Your personality type is: bland.");
  }

}


  // for (var i = 0; ...; ...) {
  //            |
  //  -----------
  //  |
var i = 0;

var options = { prompt: `Question #${i + 1}: ${questionStrings[i]}` };

read( options, theCallbackFunction );

// app.js

"use strict";


var fs = require("fs");


fs.readFile("movies.txt", "utf8", function (theError, movieFileContents) {

  if (theError === null) {
    var moviesArray = movieFileContents.split("\n");
    console.log(moviesArray);
  }

  else {
    console.log("Oh no! Error reading the file.")
    console.log( theError );
  }


});



// =====================================================================================================



var read = require("read");

var theOptions = { prompt: "What is your name?" };

function greetUser (theError, givenName) {
  console.log(`Hello, ${givenName}.`);

  // Once we have the first input, prompt again.
  var options2 = { prompt: "What is your date of birth?" }
  function displayBirthday (theError, birthDate) {
    console.log(`Your were born: ${birthDate}`);
  }
  read(options2, displayBirthday);
}


read(theOptions, greetUser);



console.log("");
console.log("");



// =====================================================================================================



  //          ------------------------
  //          |                      |
function after5Seconds () {   //     |
  console.log("5 seconds");   //     |
}                             //     |
  //                                 |
  //            ----------------------
  //            |
setTimeout(after5Seconds, 5000);


function after10Seconds () {
  console.log("10 seconds");
}

setTimeout(after10Seconds, 10000);



function after1Second () {
  console.log("1 second");
}

setTimeout(after1Second, 1000);


console.log("");
console.log("END OF PROGRAM");
console.log("");

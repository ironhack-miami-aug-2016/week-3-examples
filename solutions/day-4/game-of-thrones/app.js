"use strict";

var fs = require("fs");
var displayEpisodes = require("./lib/display-episodes.js");


function displayJsonData (theError, fileContents) {
    if (theError === null) {
      var episodes = JSON.parse(fileContents);

      displayEpisodes(episodes);
    }

    else {
      console.log("Oh no! There was an error.")
      console.log(theError);
    }
}

fs.readFile("episodes.json", "utf8", displayJsonData);

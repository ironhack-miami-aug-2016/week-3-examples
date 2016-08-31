// require_relative("lib/color_counter.rb")
var countColors = require("./lib/count-colors.js");


console.log("");
console.log("Color array");
console.log("===========");

// color_array = ["indigo", "teal", "lilac", "teal", "periwinkle", "black", "periwinkle", "baby blue", "teal"]
var colorArray = ["indigo", "teal", "lilac", "teal", "periwinkle", "black", "periwinkle", "baby blue", "teal"];

// p color_array
console.log( colorArray );



console.log("");
console.log("countColors");
console.log("===========");

// p count_colors("indigo", color_array) == 1
console.log( countColors("indigo", colorArray) === 1 );
console.log( countColors("periwinkle", colorArray) === 2 );
console.log( countColors("teal", colorArray) === 3 );

console.log( countColors("green", colorArray) === 0 );
console.log( countColors("navy blue", colorArray) === 0 );



console.log("");
console.log("Mapped colors");
console.log("=============");
// caps_colors = color_array.map do |the_color|
var capsColors = colorArray.map(function (theColor) {
  // the_color.upcase
  return theColor.toUpperCase();
}); // end

// p caps_colors
console.log(capsColors);



var averageColon = require("./lib/average-colon.js");


console.log("");
console.log("averageColon");
console.log("============");

console.log( averageColon("80:70:90:100") === 85 );
console.log( averageColon() === 0 );
console.log( averageColon("80&70&90&100") === 85 );
console.log( averageColon("80:70&90:100") === 85 );

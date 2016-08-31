// lib/count-colors.js

// def count_colors(the_color, color_array)
function theRealCountColor (theColor, colorArray) {
  // count = 0
  var count = 0;

  // color_array.each do |temp_color|
  colorArray.forEach(function (tempColor) {

    // if temp_color == the_color
    if (tempColor === theColor) {
      // count += 1
      count += 1;
    } // end

  }); // end

  // count
  return count;
}


module.exports = theRealCountColor;

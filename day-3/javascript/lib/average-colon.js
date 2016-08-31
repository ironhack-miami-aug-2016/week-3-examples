function averageColon (numbersString) {
  if (numbersString === undefined) {
    return 0;
  }

  else {
    var standardizedString = numbersString.replace(/&/g, ":");

    var numbersArray = standardizedString.split(":");

    var total = numbersArray.reduce(addString, 0);

    return total / numbersArray.length;
  }
}

function addString (sum, theString) {
  return sum + Number(theString);
}

module.exports = averageColon;

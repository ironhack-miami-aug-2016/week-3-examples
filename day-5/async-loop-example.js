"use strict";


// for (var i = 10; ...; ...) {
var i = 10;

function printCurrentCount () {
  console.log(`Current count: ${i}`);

  // for (...; ...; i -= 1) {
  i -= 1;

  // for (...; i > 0; ...) {
  if (i > 0) {
    setTimeout(printCurrentCount, 1000);
  }
}

setTimeout(printCurrentCount, 1000);


// for (var i = 10; i > 0; i -= 1) {

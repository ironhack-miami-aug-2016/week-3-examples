"use strict";


var read = require("read");

var Question = require("./lib/question.js");
var Quiz = require("./lib/quiz.js");


var question1 = new Question(1, "What is the primary programming language on browsers?", "JavaScript");
var question2 = new Question(2, "What allows you to run JavaScript on the backend?", "Node.js");
var question3 = new Question(3, "What's the capital of Burkina Faso?", "Ouagadougou");
var question4 = new Question(4, "How many stars are in the Milky Way Galaxy?", "100 billion");
var question5 = new Question(5, "How many feet are in a mile?", "5280");

var theQuiz = new Quiz();

theQuiz.addQuestion( question1 );
theQuiz.addQuestion( question2 );
theQuiz.addQuestion( question3 );
theQuiz.addQuestion( question4 );
theQuiz.addQuestion( question5 );


function handleInput (theError, input) {
  theQuiz.answer(input);

  if (theQuiz.isGameOver()) {
    console.log("GAME OVER");
  }
  else {
    options.prompt = theQuiz.getCurrentQuestion();
    read(options, handleInput);
  }
}


var options = { prompt: theQuiz.getCurrentQuestion() };

read(options, handleInput);

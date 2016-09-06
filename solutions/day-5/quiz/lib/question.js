"use strict";


class Question {
  constructor (id, question_text, answer) {
    this.id = id;
    this.question_text = question_text;
    this.answer = answer;
  }
}

module.exports = Question;

"use strict";

const Hangman = function(word, guesses, lettersGuessed) {
  this.word = word.toLowerCase().split();
  this.guesses = guesses;
  this.lettersGuessed = ["C", "e"];
};

Hangman.prototype.getPuzzel = function() {
  let puzzel = "";

  this.word.forEach(letter => {
    if (this.lettersGuessed.includes(letter) || letter === " ") {
      puzzel += letter;
    } else {
      puzzel += "*";
    }
  });
  return puzzel;
};

const wordOne = new Hangman("Cat", 2);
console.log(wordOne.getPuzzel());

const wordTwo = new Hangman("new jersey", 3);
console.log(wordTwo.getPuzzel());

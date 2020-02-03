"use strict";

const Hangman = function(word, guesses, lettersGuessed) {
  this.word = word.toLowerCase().split("");
  this.guesses = guesses;
  this.lettersGuessed = ["c", "a", "t"];
};

Hangman.prototype.getPuzzle = function() {
  let puzzle = "";

  this.word.forEach(letter => {
    if (this.lettersGuessed.includes(letter) || letter === " ") {
      puzzle += letter;
    } else {
      puzzle += "*";
    }
  });

  return puzzle;
};

const wordOne = new Hangman("cat", 2);
console.log(wordOne.getPuzzle());

const wordTwo = new Hangman("new jersey", 3);
console.log(wordTwo.getPuzzle());

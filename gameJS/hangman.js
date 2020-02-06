"use strict";

const Hangman = function(word, guesses) {
  this.word = word.toLowerCase().split("");
  this.guesses = guesses;
  this.lettersGuessed = [];
};

Hangman.prototype.getGuesses = function(guess) {
  const goodGuess = !this.lettersGuessed.includes(guess);
  const badGuess = !this.word.includes(guess);

  if (goodGuess) {
    this.lettersGuessed.push(guess);
  }

  if (goodGuess && badGuess) {
    this.guesses--;
  }
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

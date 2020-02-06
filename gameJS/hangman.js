"use strict";

const Hangman = function(word, guesses) {
  this.word = word.toLowerCase().split("");
  this.guesses = guesses;
  this.lettersGuessed = [];
  this.status = "playing";
  // console.log(this.status);
};

Hangman.prototype.getStatus = function() {
  if (this.guesses === 0) {
    this.status = "failed";
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

Hangman.prototype.getGuesses = function(guess) {
  guess = guess.toLowerCase();
  const goodGuess = !this.lettersGuessed.includes(guess);
  const badGuess = !this.word.includes(guess);

  if (goodGuess) {
    this.lettersGuessed.push(guess);
  }

  if (goodGuess && badGuess) {
    this.guesses--;
  }
  this.getStatus();
};

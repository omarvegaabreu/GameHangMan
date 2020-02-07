"use strict";

const Hangman = function(word, guesses) {
  this.word = word.toLowerCase().split("");
  this.guesses = guesses;
  this.lettersGuessed = [];
  this.status = "playing";
};

Hangman.prototype.getStatus = function() {
  let finished = true;

  this.word.forEach(letter => {
    if (this.lettersGuessed.includes(letter)) {
    } else {
      finished = false;
    }
  });
  if (this.guesses === 0) {
    this.status = "failed";
  } else if (finished) {
    this.status = "finished";
  } else {
    this.status = "playing";
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

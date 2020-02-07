"use strict";

const Hangman = function(word, guesses) {
  this.word = word.toLowerCase().split("");
  this.guesses = guesses;
  this.lettersGuessed = [];
  this.status = "playing";
};

Hangman.prototype.getStatusMessage = function() {
  let message = "";
  const word = this.word.join("");
  if (this.status === "playing") {
    return (message = `${this.status}: You have ${this.guesses} guesses`);
  } else if (this.status === "failed") {
    return (message = `You ${this.status}. The correct answer was ${word}`);
  } else {
    return (message = "You win");
  }
};

Hangman.prototype.getStatus = function() {
  const finished = this.word.every(letter =>
    this.lettersGuessed.includes(letter)
  );

  if (this.guesses === 0) {
    this.status = "failed";
  } else if (finished === true) {
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
  if (this.status === "playing") {
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
  }
};

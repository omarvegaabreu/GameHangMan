"use strict";

const Hangman = function(word, guesses) {
  this.word = word.toLowerCase().split("");
  this.guesses = guesses;
  this.lettersGuessed = [];
};

Hangman.prototype.getGuesses = function(guess) {
  // guess = guess.toLowerCase();
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

const wordOne = new Hangman("cat", 2);

const wordTwo = new Hangman("new jersey", 3);

const getPuzzel = document.querySelector("#puzzel");
getPuzzel.textContent = wordOne.getPuzzle();

const guesses = document.querySelector("#guesses");
guesses.textContent = wordOne.guesses;
// console.log(wordOne.getPuzzle());
// console.log(wordOne.guesses);

window.addEventListener("keypress", e => {
  const keypress = String.fromCharCode(e.charCode);
  wordOne.getGuesses(keypress);
  // console.log(wordOne.getPuzzle());
  getPuzzel.textContent = wordOne.getPuzzle();
  // console.log(wordOne.guesses);
  guesses.textContent = wordOne.guesses;
});

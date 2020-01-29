"use strict";

let word;
let lettersGuessed;
let guesses;

const Hangman = function(word, guesses, lettersGuessed) {
  this.word = word.toLowerCase();
  this.guesses = guesses;
  this.lettersGuessed = lettersGuessed.toLowerCase();
};

Hangman.prototype.getPuzzel = function() {
  let puzzel = this.word.split("");
  let letter = this.lettersGuessed.split("");

  return `${puzzel} next ${letter}`;
};

const wordOne = new Hangman("HANGMAN", 2, "13334");
console.log(wordOne.getPuzzel());

const wordTwo = new Hangman("Game", 3, "other guesses");
console.log(wordTwo.getPuzzel());

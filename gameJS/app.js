"use strict";

const wordOne = new Hangman("cat", 2);

const wordTwo = new Hangman("new jersey", 3);

const getPuzzel = document.querySelector("#puzzel");
getPuzzel.textContent = wordOne.getPuzzle();

const guesses = document.querySelector("#guesses");
guesses.textContent = wordOne.guesses;
wordOne.status;
console.log(wordOne.status);

// console.log(wordOne.getStatus());

window.addEventListener("keypress", e => {
  const keypress = String.fromCharCode(e.charCode);
  wordOne.getGuesses(keypress);
  getPuzzel.textContent = wordOne.getPuzzle();
  guesses.textContent = wordOne.guesses;
  console.log(wordOne.status);
});

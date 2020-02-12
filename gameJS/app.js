"use strict";

const wordOne = new Hangman("cave man", 2);

const getPuzzel = document.querySelector("#puzzel");
getPuzzel.textContent = wordOne.puzzle;

const guesses = document.querySelector("#guesses");
guesses.textContent = wordOne.statusMessage;
wordOne.status;

window.addEventListener("keypress", e => {
  const keypress = String.fromCharCode(e.charCode);
  wordOne.getGuesses(keypress);
  getPuzzel.textContent = wordOne.puzzle;
  guesses.textContent = wordOne.statusMessage;
});

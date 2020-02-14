"use strict";

const wordOne = new Hangman("Caterina", 15);

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
getPuzzle("2", (error, puzzle) => {
  error ? console.log(`Error: ${error}`) : console.log(puzzle);
});
getCountry("US", (error, country) => {
  error
    ? console.log(`Error:${error}`)
    : console.log(`Country name: ${country}`);
});

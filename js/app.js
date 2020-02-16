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

getCountry("US").then(
  country => {
    console.log(country);
  },
  error => {
    console.log(`ERROR:${error}`);
  }
);

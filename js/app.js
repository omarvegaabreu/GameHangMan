"use strict";

let wordOne;

const getPuzzel = document.querySelector("#puzzel");
// getPuzzel.textContent = wordOne.puzzle;

const guesses = document.querySelector("#guesses");
// guesses.textContent = wordOne.statusMessage;
// wordOne.status;

const startGame = async () => {
  const puzzel = await getPuzzle("2");
  wordOne = new Hangman(puzzel, 10);
  renderGame();
};

const renderGame = () => {
  guesses.textContent = wordOne.statusMessage;
  getPuzzel.textContent = wordOne.puzzle;
};

window.addEventListener("keypress", e => {
  const keypress = String.fromCharCode(e.charCode);
  wordOne.getGuesses(keypress);
  getPuzzel.textContent = wordOne.puzzle;
  guesses.textContent = wordOne.statusMessage;
});
getLocation()
  .then(countryCode => {
    console.log(countryCode.name);
  })
  .catch(error => {
    console.log(error);
  });

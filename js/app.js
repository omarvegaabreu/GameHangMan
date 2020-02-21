"use strict";

let wordOne;

const puzzleEl = document.querySelector("#puzzle");

const guesses = document.querySelector("#guesses");

const startGame = async () => {
  const puzzle = await getPuzzle("2");
  wordOne = new Hangman(puzzle, 10);
  renderGame();
};

const renderGame = () => {
  guesses.textContent = wordOne.statusMessage;
  puzzleEl.textContent = "";
  wordOne.puzzle.split("").forEach(letter => {
    const letterEl = document.createElement("span");
    letterEl.textContent = letter;
    puzzleEl.appendChild(letterEl);
  });
};
startGame();
const button = document.querySelector("#resetButton");
button.addEventListener("click", e => {
  startGame();
  renderGame();
});

window.addEventListener("keypress", e => {
  const keypress = String.fromCharCode(e.charCode);
  wordOne.getGuesses(keypress);
  puzzleEl.textContent = wordOne.puzzle;
  guesses.textContent = wordOne.statusMessage;
  renderGame();
});

getLocation()
  .then(countryCode => {
    console.log(countryCode.name);
  })
  .catch(error => {
    console.log(error);
  });

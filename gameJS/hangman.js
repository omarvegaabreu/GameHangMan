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

//guess c t z

// console.log(wordOne.getGuesses());
// print remaining guesses answer should be 1

const wordTwo = new Hangman("new jersey", 3);

console.log(wordOne.getPuzzle());
console.log(wordOne.guesses);

// guess w answer should be **w ******

window.addEventListener("keypress", e => {
  const keypress = String.fromCharCode(e.charCode);
  wordOne.getGuesses(keypress);
  console.log(wordOne.getPuzzle());
  console.log(wordOne.guesses);
});

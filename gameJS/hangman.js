"use strict";
class Hangman {
  constructor(word, guesses) {
    this.word = word.toLowerCase().split("");
    this.guesses = guesses;
    this.lettersGuessed = [];
    this.status = "Playing";
  }
  get statusMessage() {
    let message = "";
    const word = this.word.join("");
    if (this.status === "Playing") {
      return (message = `${this.status}: You have ${this.guesses} guesses`);
    } else if (this.status === "Failed") {
      return (message = `Nice try. The correct answer was: "${word}"`);
    } else {
      return (message = "You win");
    }
  }
  getStatus() {
    const finished = this.word.every(
      letter => this.lettersGuessed.includes(letter) || letter === " "
    );

    if (this.guesses === 0) {
      this.status = "Failed";
    } else if (finished === true) {
      this.status = "Finished";
    } else {
      this.status = "Playing";
    }
  }
  get puzzle() {
    let puzzle = "";

    this.word.forEach(letter => {
      if (this.lettersGuessed.includes(letter) || letter === " ") {
        puzzle += letter;
      } else {
        puzzle += "*";
      }
    });

    return puzzle;
  }

  getGuesses(guess) {
    if (this.status === "Playing") {
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
  }
}

var letter = require('./letter.js');

//constructor function used to create programmers objects
function Word(wordbee) {
  this.newLetters = [];
  this.wordbee = wordbee;
  this.moreWords = false;

  this.wrd = function () {
    for (var i = 0; i < this.wordbee.length; i++) {
      this.newLetters.push(new letter(this.wordbee[i]));
    }
  };

  this.moreWord = function () {
    this.moreWords = this.newLetters.every(function (lettered) {
      return lettered.guessed;
    });
    return this.moreWords;
  };

  this.character = function (letterGuesser) {
    var startOver = 0;

    for (var i = 0; i < this.newLetters.length; i++) {
      if (this.newLetters[i].alfa == letterGuesser) {
        this.newLetters[i].guessed = true;
        startOver++;
      }
    }
    return startOver;
  };

  this.wordSupplier = function () {
    var lttrs = " ";
    for (var i = 0; i < this.newLetters.length; i++) {
      lttrs += this.newLetters[i].letterRender();
    }
    return lttrs;
  };
}
module.exports = Word;
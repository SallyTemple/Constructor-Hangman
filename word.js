
var Letter = require('./letter.js');

//constructor function used to create programmers objects
function WordBee(value) {
  this.value = value
  this.letter = [];
  this.guesses = "";
  };


module.exports = WordBee;
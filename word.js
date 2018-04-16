
var Letter = require('./letter.js');

//constructor function used to create programmers objects
function WordBee(value) {
  this.value = value
  this.letter = [];
  this.guesses = "";
  
  // creates the printInfo method and applies it to all programmer objects
  this.printInfo = function() {
    console.log("Name: " + this.name + "\nPosition: " + this.position +
    "\nAge: " + this.age + "\nLanguages: " + this.language);
  };
}

module.exports = WordBee;
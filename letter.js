
var is_letter_a = require('is_letter_a');
// constructor function which can be used to create "letter" objects
var Letter = function() {
      this.value = "";
      this.guessed = false;
}

//method returns the underlying character if the letter has been guessed
this.guessedLetter = function() {
      if (this.guessed) {
        console.log(this.value);
        
      }
      else {
        console.log("_");
      }
    };
  
module.export = Letter
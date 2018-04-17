// constructor function which can be used to create "letter" objects
var Letter = function(alfa) {
      this.guessed = false;
      this.alfas = alfa.toUpperCase();


//method returns the underlying character if the letter has been guessed
this.guessedLetter = function() {
  var underscore = "_";
  return  this.guessed === true? " " + this.alfas + " " : underscore;
};

this.answerGuess = function(letters){
 
    this.guessed = letters === this.alfas? true: false;
    return this.guessed
   }
};
     

  
module.export = Letter;
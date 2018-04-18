// constructor function which can be used to create "letter" objects
var letter = function(alfa) {
      this.guessed = false;
      this.alfa = alfa


//method returns the underlying character if the letter has been guessed
this.guessedLetter = function() {
  var underscore = "_";
  return  this.guessed === true? " " + this.alfa + " " : underscore;
};

this.answerGuess = function(letters){
 
    this.guessed = letters === this.alfa? true: false;
    return this.guessed
   }
};
     

  
module.exports = letter;

var Letter = require('./letter.js');

//constructor function used to create programmers objects
var WordBee = function (wordbee) {
  this.newLetters = [];
  this.wordy = wordbee.split(" ").join(" ");
  this.moreWords =function() {

    var character = [];
    if( this.newLetters.length === 0){
      for (var i=0; i < this.wordy.length; i++){
        this.newLetters.push(new Letter(this.wordy[i]));
      }
    }

    for(var i=0; i < this.newLetters.length; i++){
      character.push(this.newLetters[i].alphabetsoup());
    }
 
    return character.join(" ");
  }; 
  

  this.soupCharacter = function(soupChara) {
    for(var i= 0; i < this.newLetters.length; i++){
      if(this.newLetters[i].estimate != true){
        this.newLetters[i].checkEstimate(character);
      }  
     }
  };

}
  module.exports = WordBee;
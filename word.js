
var Letter = require('./letter.js');

//constructor function used to create programmers objects
function WordBee(newWord) {
  this.newWord = newWord;
  this.newLetter = [];
  this.character = "";

  this.soupCharacter = function() {
  for(var i = 0; i < this.newWord.length; i++) {
      this.newLetter.push(new alfabetSoup.letty(this.newWord[i]));
}
  };


module.exports = WordBee;
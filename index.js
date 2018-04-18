
var Word = require('./word.js');
var prompt = require('prompt');

console.log("Welcome");
console.log("Guess a letter of an animal");
console.log("Enjoy!!!");
prompt.start();

wordGuess = {
      wordsToGuess: ["cat", "dog", "fish", "bird", "owl", "rat", "lion", "tiger", "donkey", "chicken", "goat", "eel", "mosquito", "shark"],
      score: 0,
      chancesLeft: 12,
      spelledWord: null,

      soupCharacter: function () {
            this.startOver();
            this.spelledWord = new Word(this.wordsToGuess[Math.floor(Math.random() * this.wordsToGuess.length)]);
            this.spelledWord.wrd();
            this.promptPlayers();
      },

      startOver: function () {
            this.chancesLeft = 12;
      },

      promptPlayers: function () {
            var player = this;
            prompt.get(['letterGuesser'], function (err, result) {
                  console.log("Your guessed: " + result.letterGuesser);
                  var userGuess = player.spelledWord.character(result.letterGuesser);
                  if (userGuess == 0) {
                        console.log("Try Again");
                        player.chancesLeft;
                  } else {
                        console.log("Super");
                        if (player.spelledWord.moreWord()) {
                              console.log("You did it!");
                              return;
                        }
                  }

                  console.log("Chances Left: " + player.chancesLeft);
                  if ((player.chancesLeft > 0) && (player.spelledWord.moreWords == false)) {
                        player.promptPlayers();
                  }
                  else if (player.chancesLeft == 0) {
                        console.log("You did it!", player.spelledWord.wordbee);
                  } else {
                        console.log(player.spelledWord.wordSupplier());
                  }
            });

      }


};
wordGuess.soupCharacter();
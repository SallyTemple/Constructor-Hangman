
var Word = require('./word.js');
var prompt = require('prompt');


console.log("Guess a letter of an animal");
console.log("-----------------------------");
prompt.start();

wordGuess = {
      wordsToGuess: ["cat", "dog", "fish", "bird", "owl", "rat", "lion", "tiger", "donkey", "chicken", "goat", "eel", "mosquito", "shark"],
      score: 0,
      chancesLeft: 12,
      spelledWord: null,

      GameBegin: function (letterSelection) {
            this.startOver();
            this.spelledWord = new Word(this.wordsToGuess[Math.floor(Math.random() * this.wordsToGuess.length)]);
            this.spelledWord.win();
            this.promptPlayers();
      },

      startOver: function () {
            this.chancesLeft = 12;
      },

      promptPlayers: function () {
            var player = this;
            prompt.get(['letterGuess'], function (err, result) {
                  console.log("Your guessed: " + result.letterGuess);
                  var userGuess = player.spelledWord.checkLetter(result.letterGuess);
                  
                  if (userGuess == 0) {
                        console.log("Try Again");
                        player.chancesLeft--;

                  } else {
                        console.log("Super");
                        if (player.spelledWord.moreWord()) {
                              console.log("You did it!");
                              console.log("-------------------");
                              return;
                        }
                  }

                  console.log("Chances Left: " + player.chancesLeft);
                  console.log("-------------------");
                  if ((player.chancesLeft > 0) && (player.spelledWord.found == false)) {
                        player.promptPlayers();
                  }
                  else if (player.chancesLeft == 0) {
                        console.log("You did it!", player.spelledWord.target);
                  } else {
                        console.log(player.spelledWord.wordRender());
                  }
            });

      }


};

game.GameBegin();
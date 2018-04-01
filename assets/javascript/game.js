//*Sets page to be ready for manipulation
$(document).ready(function() {

//*Setting varable for all keystrokes
var anyKey = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//Set a guess variable to the keystroke at the very onset of the game, and use key codes

//*Setting variable for producers inside the word bank
var wordBank = ["DJPremier", "KanyeWest", "JDilla", "Nujabes"];
//You'll have to run a for loop for this, so on iteration 1 the user is trying to spell "DJ Premier," iteration 2 is trying to spell "Kanye West," etc. 

//*Setting variable for alotted number of guesses
var guess = 15;

//*Setting variable for wins
var wins = 0

//* Setting variable for losses
var losses = 0

//*Setting variable to randomly select a word for the game to start on
var wordBankStart = wordBank[Math.floor(Math.random() * wordBank.length)];

//*Setting empty array to contain the answers 
var answerArray = []

//*for loop to display underscores corresponding to amount of letters in the word selected by wordBankStart
for (var i = 0; i < wordBankStart.length; i++) {
    answerArray[i] = "_";
};

    //*Makes #start-game div disappear
    $("body").keypress(function(){
        $("#start-game").hide("#start-game");
        console.log(wordBankStart);
        console.log(answerArray);
        $("#current-word").append("<div>" + answerArray + "</div>")
    })


})
/*

Game process:
- Press any key to get started (write fnction to take any input to make this HTML disappear)
    -if the game is started, then add that letter to the correct bank (correct or incorrect letter)

-Word bank (in order): DJ Premier, Kanye West, Nujabes, J Dilla
        Create array for word bank
        Create for loop to render each string in the array to be the word the user is trying to spell

-Write function to render correct letter guesses on respective empty underscores

-Allow for 15 guesses. Write function to render each guess to subtract one try

-Write function to render incorrect letter guesses in the "Letters Already Guessed" area

-If the correct answer is written in the alotted number guesses, play a song
    -DJ Premier: "Moment of Truth"
    -Kanye West: "Blood on the Leaves" (play clip with the horns)
    -J Dilla: "Won't Do" (Dillanthology Vol. 3)
    -Nujabes: "Luv (sic) pt 2 Acoustica"

-If the answer is not guessed within the alotted number of guesses, skip to the next one

*/

//*====================================== VARIABLES =====================================
//*Setting varable for all keystrokes
var anyKey = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

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
var answerArray = [];
    //*Setting For Loop so that on each iteration, answerArray is filled with underscores up to the length of a word in the wordBank length (for example, on the "Kanye West" iteration, answerArray would be filled with 9 underscores)
    for (var i = 0; i < wordBankStart.length; i++) {
        answerArray[i] = "_";
    };

//*Adds a new div within the current-word div
$("#current-word").append("newDiv")

debugger;
//*buggy boi for testing to see if answerArray displays on the page.

//Displays the answerArray on the page
answerArray.each(function(answerArray) {
    newDiv.append("<div>" + answerArray + "</div>")
});

//*Setting variable for letter of word youre guessing
var answerArrayLetters = wordBank.indexOf(wordBankStart)
    //*Setting Loop for answerArrayLetters to be funneled into answerArray
    for (var j = 0; j < wordBankStart.length; j++) {
        if (answerArrayLetters[j] === wordBankStart) {
            answerArray
        }
    }


//*Setting Remaining Guesses variable
var remainingGuesses = function () {
    //*Setting for loop to update remaining guesses after a correct guess. Use var j because i is already used 
    for (var j = 0; j < wordBankStart.length; j++) {
        //
        if (wordBankStart[j] === wordBankStart) {
        answerArray[j] = wordBankStart;
        guesses--;
        };};
}

//*===================================== FUNCTIONS ================================

//*Setting function to capture user's keystroke
document.onkeyup = function(event) {
    //*Setting variable so that it equals any key pressed
    var e = event.key;
    console.log(e);
        //*Setting correct guessed key codes for first iteration, see if there's a way to write an object for more efficient code
        if ((e === "d") || (e === "j") || (e === "p") || (e === "r") || (e === "e") || (e === "m" )) 
            console.log(answerArray);
};
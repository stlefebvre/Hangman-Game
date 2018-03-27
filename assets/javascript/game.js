/*

Game process:
- Press any key to get started (write fnction to take any input to make this HTML disappear)

-Word bank (in order): DJ Premier, Kanye West, Nujabes, J Dilla
        Create array for this?

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

//*VARIABLES
var anyKey = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wordBank = ["DJ Premier", "Kanye West", "J Dilla", "Nujabes"];
userInput = String.fromCharCode(anyKey)

document.onkeyup = function(event) {

    //*if any key pressed = any key from anyKey array
    if ((onkeyup === userInput) && (userInput === anyKey.length)) {console.log("you pressed a key");}
};



// rock paper scissors played in the console 
// Welcome the player to the game and ask them to select rock, paper, or scissors.
// The computer then randomly selects one of the 3 options as well then displays its choice on the command line. - Start here as it might be easiest to build off of.
// depending on the outcome of the choices supply 3 options : Player win, computer win, tie.
// get 1 round working before moving to next step
// log the score and a winner is chosen after 5 rounds have been won by that player.


// Generates a random number from 0-2 each one is assigned one of the 3 choices from the game and logged to the console.
function computerPlay() {
    let input = Math.floor(Math.random() * 3);
    
    if (input == 0 ) {
        let computerChoice = "Rock"
        console.log(computerChoice)
    }
    else if ( input == 1 ) {
        let computerChoice = "Paper"
        console.log(computerChoice)
    }
    else {
        let computerChoice = "Scissors"
        console.log(computerChoice)
    }
    
    
}


    
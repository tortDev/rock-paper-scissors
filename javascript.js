// rock paper scissors played in the console 
// Welcome the player to the game and ask them to select rock, paper, or scissors.
// The computer then randomly selects one of the 3 options as well then displays its choice on the command line. - Start here as it might be easiest to build off of.
// depending on the outcome of the choices supply 3 options : Player win, computer win, tie.
// get 1 round working before moving to next step
// log the score and a winner is chosen after 5 rounds have been won by that player.


// Generates a random number from 0-2 each one is assigned one of the 3 choices from the game and saved
function computerPlay() {
    const input = Math.floor(Math.random() * 3);
    
    if (input == 0 ) {
        let computerChoice = "Rock"
         return computerChoice
    }
    else if ( input == 1 ) {
        let computerChoice = "Paper"
         return computerChoice
    }
    else {
        let computerChoice = "Scissors"
         return computerChoice
    }
}


// takes the users input and saves it - is case insensitve.
function userPlay() {
    let input = prompt("Rock, Paper, or Scissors")
    let userChoice = input.charAt(0).toUpperCase() + input.toLowerCase().slice(1)
    return userChoice;
}


// uses my 2 previous funtions and compares the results. Returns the winner.
function round (user , computer) {

// want to rewrite this portion so the the function instead returns these instead of logigng them. just a baseline.
    console.log("You chose: " + user)
    console.log("Computer chose: " + computer)
    // loss conditions
    if (user == "Rock" && computer == "Paper") {
        let outcome = "Paper covers rock. You lose!"
        return outcome
    }
    if (user == "Paper" && computer == "Scissors") {
        let outcome = "Scissors cuts paper. You lose!"
        return outcome
    }
    if (user == "Scissors" && computer == "Rock") {
        let outcome = "Rock smashes scissors. You lose!"
        return outcome
    }
    // win conditions
    if (user == "Rock" && computer == "Scissors") {
        let outcome = "Rock smashes scissors. You win!"
        return outcome
    }
    if (user == "Paper" && computer == "Rock") {
        let outcome = "Paper covers rock. You win!"
        return outcome
    }
    if (user == "Scissors" && computer == "Paper") {
        let outcome = "Scissors cut paper. You win!"
        return outcome
    }
    // tie conditions - WIP
    
    
}

console.log(round(userPlay(),computerPlay()))   
// rock paper scissors played in the console 
// Welcome the player to the game and ask them to select rock, paper, or scissors.
// The computer then randomly selects one of the 3 options as well then displays its choice on the command line. - Start here as it might be easiest to build off of.
// depending on the outcome of the choices supply 3 options : Player win, computer win, tie.
// get 1 round working before moving to next step
// log the score and a winner is chosen after 5 rounds have been won by that player.

let userScore = 0
let computerScore = 0
let draws = 0
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
    let userOutput = "You chose: " + user
    let computerOutput = "Computer chose: " + computer
    // loss conditions
    if (user == "Rock" && computer == "Paper") {
        let outcome = "Paper covers rock. You lose!"
        return `${userOutput}\
        ${computerOutput}\
        ${outcome}`
    }
    if (user == "Paper" && computer == "Scissors") {
        let outcome = "Scissors cuts paper. You lose!"
        return `${userOutput}\
        ${computerOutput}\
        ${outcome}`
    }
    if (user == "Scissors" && computer == "Rock") {
        let outcome = "Rock smashes scissors. You lose!"
        return `${userOutput}\
        ${computerOutput}\
        ${outcome}`
    }
    // win conditions
    if (user == "Rock" && computer == "Scissors") {
        let outcome = "Rock smashes scissors. You win!"
        return `${userOutput}\
        ${computerOutput}\
        ${outcome}`
    }
    if (user == "Paper" && computer == "Rock") {
        let outcome = "Paper covers rock. You win!"
        return `${userOutput}\
        ${computerOutput}\
        ${outcome}`
    }
    if (user == "Scissors" && computer == "Paper") {
        let outcome = "Scissors cut paper. You win!"
        return `${userOutput}\
        ${computerOutput}\
        ${outcome}`
    }
    // tie condition
    if (user == computer) {
        let outcome = "Draw!"
        return `${userOutput}\
        ${computerOutput}\
        ${outcome}`
    }
    else {
        alert("Please type Rock, Paper, or Scissors");
        round(userPlay(),computerPlay())
    }
}

// Uses my 2 previous functions in a loop to play a round of RPS and logs the winner. When the max score is met the loop breaks and prints our game results to the console.


function game(){
    for (let i = 0; i < 1000; i++) {
        let outcome = round(userPlay(),computerPlay())
        console.log(outcome)
       if (outcome.indexOf('win') > -1) {   
        userScore++
        console.log(`Score - Player : ${userScore}\
        Computer : ${computerScore}`);
        }
        else if (outcome.indexOf('Draw') > -1){
        draws++;
        }
        else {
            computerScore++
            console.log(`Score - Player : ${userScore}\
        Computer : ${computerScore}`);
        }
        if (userScore === 5) {
            console.log("Congrats! You win!");
            break;
        }
        if (computerScore === 5) {
            console.log("You lost, better luck next time!");
            break;
        }
        
    }
}
game()
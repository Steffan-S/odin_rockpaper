// Computer must know the three choices it can pick Form
const choices = ["rock", "paper", "scissor"];

// Computer must choose one of the three choices (random)
function getComputerChoice () {
    let computerChoice = choices[Math.floor((Math.random() * choices.length))];
    return computerChoice;
}

// Computer must return the picked choice
let resultComputerChoice = getComputerChoice();

// console log result function;
console.log(resultComputerChoice + ' The computer');


// Player needs to input their choise (rock, paper or scissor)
let getInputPlayer = prompt('Time to make your choice: Rock, Paper or Scissor');

// Need to transform input to rule out spelling mistakes
let inputPlayer = getInputPlayer.toLowerCase();
console.log(inputPlayer + ' The player');

// When we have input from player and computer, compare two inputs
// Return outcome comparison
function playRound(){
    if (inputPlayer == 'rock' && resultComputerChoice == 'paper'){
        return 'Computer wins'; 
    } else if (inputPlayer == 'rock' && resultComputerChoice == 'scissor'){
        return 'Player wins'; 
    } else if (inputPlayer == 'paper' && resultComputerChoice == 'rock'){
        return 'Player wins'; 
    } else if (inputPlayer == 'paper' && resultComputerChoice == 'scissor'){
        return 'Computer wins'; 
    } else if (inputPlayer == 'scissor' && resultComputerChoice == 'rock'){
        return 'Computer wins'; 
    } else if (inputPlayer == 'scissor' && resultComputerChoice == 'paper'){
        return 'Player wins'; 
    } else {
        return 'Draw';
    }
}

// Display result for player
let result = playRound();
console.log(result);
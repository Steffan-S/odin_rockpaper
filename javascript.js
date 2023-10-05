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
        return 'You lose! Paper beats Rock'; 
    } else if (inputPlayer == 'rock' && resultComputerChoice == 'scissor'){
        return 'You win! Rock beats Scissor'; 
    } else if (inputPlayer == 'paper' && resultComputerChoice == 'rock'){
        return 'You win! Paper beats rock'; 
    } else if (inputPlayer == 'paper' && resultComputerChoice == 'scissor'){
        return 'You lose! Scissor beats Paper'; 
    } else if (inputPlayer == 'scissor' && resultComputerChoice == 'rock'){
        return 'You lose! Rock beats Scissor'; 
    } else if (inputPlayer == 'scissor' && resultComputerChoice == 'paper'){
        return 'You win! Scissor beats paper'; 
    } else {
        return 'You draw!';
    }
}

// Display result for player
let result = playRound();
alert(result);
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
function playRound(player, computer){
    if (player == 'rock' && computer == 'paper'){
        return 'You lose! Paper beats Rock'; 
    } else if (player == 'rock' && computer == 'scissor'){
        return 'You win! Rock beats Scissor'; 
    } else if (player == 'paper' && computer == 'rock'){
        return 'You win! Paper beats rock'; 
    } else if (player == 'paper' && computer == 'scissor'){
        return 'You lose! Scissor beats Paper'; 
    } else if (player == 'scissor' && computer == 'rock'){
        return 'You lose! Rock beats Scissor'; 
    } else if (player == 'scissor' && computer == 'paper'){
        return 'You win! Scissor beats paper'; 
    } else {
        return 'You draw!';
    }
}

// Display result for player
let result = playRound(inputPlayer, resultComputerChoice);
alert(result);



// function game();
// Computer must know the three choices it can pick Form
const choices = ["rock", "paper", "scissor"];
// Computer must choose one of the three choices (random)
let computerChoice = getComputerChoice();
function getComputerChoice () {
    let pickComputerChoice = choices[Math.floor((Math.random() * choices.length))];
// Computer must return the picked choice
    return pickComputerChoice;
}

let inputPlayer = getInputPlayer();
// Player needs to input their choise (rock, paper or scissor)
// Need to transform input to rule out spelling mistakes
function getInputPlayer() {
    let pickInputPlayer = prompt('Time to make your choice: Rock, Paper or Scissor').toLowerCase();
    // console.log(inputPlayer + ' inside player function')
    return pickInputPlayer;
}

game();

// When we have input from player and computer, compare two inputs
// Return outcome comparison
function playRound(player, computer){
    console.log(computerChoice + ' The computer');
    console.log(inputPlayer + ' The player');
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

// // Display result for player
// let result = playRound(inputPlayer, resultComputerChoice);
// alert(result);


// // score you and computer
// let scorePlayer = 0;
// let scoreComputer = 0;

// play 5 games of rock paper scissor
function game(){
    console.log('starting the game');
    playRound(inputPlayer, computerChoice);

    console.log('starting 2nd round');
    getComputerChoice();
    getInputPlayer();
    playRound(inputPlayer, computerChoice);

    console.log('starting 3nd round');
    getComputerChoice();
    getInputPlayer();
    playRound(inputPlayer, computerChoice);

    console.log('starting 4nd round');
    getComputerChoice();
    getInputPlayer();
    playRound(inputPlayer, computerChoice);

    console.log('starting 5nd round');
    getComputerChoice();
    getInputPlayer();
    playRound(inputPlayer, computerChoice);
}
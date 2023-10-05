// Computer must know the three choices it can pick Form
const choices = ["rock", "paper", "scissor"];

// Initialize computer variable
let computerChoice

// Computer must choose one of the three choices (random)
function getComputerChoice () {
    let pickComputerChoice = choices[Math.floor((Math.random() * choices.length))];
// Computer must return the picked choice
    return pickComputerChoice;
}

// Initialize inputplayer variable
let inputPlayer

// Player needs to input their choise (rock, paper or scissor)
// Need to transform input to rule out spelling mistakes
function getInputPlayer() {
    let pickInputPlayer = prompt('Time to make your choice: Rock, Paper or Scissor').toLowerCase();
 // Return picked player choise
    return pickInputPlayer;
}



// When we have input from player and computer, compare two inputs
// Return outcome comparison
function playRound(player, computer){
    console.log(computerChoice + ' The computer');
    console.log(inputPlayer + ' The player');
    if (player == 'rock' && computer == 'paper'){
        scoreComputer++;
        return alert('You lose! Paper beats Rock');
    } else if (player == 'rock' && computer == 'scissor'){
        scorePlayer++;
        return alert('You win! Rock beats Scissor'); 
    } else if (player == 'paper' && computer == 'rock'){
        scorePlayer++;
        return alert('You win! Paper beats rock'); 
    } else if (player == 'paper' && computer == 'scissor'){
        scoreComputer++;
        return alert('You lose! Scissor beats Paper'); 
    } else if (player == 'scissor' && computer == 'rock'){
        scoreComputer++;
        return alert('You lose! Rock beats Scissor'); 
    } else if (player == 'scissor' && computer == 'paper'){
        scorePlayer++;
        return alert('You win! Scissor beats paper'); 
    } else if (player == 'scissor' && computer == 'scissor' || player == 'paper' && computer == 'paper' || player == 'rock' && computer == 'rock'){
        scoreDraw++;
        return alert('You Draw!'); 
    } else {
        return alert('You have to pick Rock, Paper or Scissors');
    }
}

// Display result for player
// let result = playRound(inputPlayer, resultComputerChoice);
// alert(result);

let scorePlayer = 0;
let scoreComputer = 0;
let scoreDraw = 0;
// console.log('You won: ' + scorePlayer + ' times, the computer won: ' + scoreComputer + ' times and you drawed: ' +scoreDraw + ' times')
// score you and computer
// let scorePlayer = 0;
// let scoreComputer = 0;

// play 5 games of rock paper scissor
function game(){
    console.log('starting the game');
    computerChoice = getComputerChoice();
    inputPlayer = getInputPlayer();
    playRound(inputPlayer, computerChoice);
    console.log('You won: ' + scorePlayer + ' times, the computer won: ' + scoreComputer + ' times and you drawed: ' +scoreDraw + ' times')

    console.log('starting 2nd round');
    computerChoice = getComputerChoice();
    inputPlayer = getInputPlayer();
    playRound(inputPlayer, computerChoice);
    console.log('You won: ' + scorePlayer + ' times, the computer won: ' + scoreComputer + ' times and you drawed: ' +scoreDraw + ' times')

    console.log('starting 3nd round');
    computerChoice = getComputerChoice();
    inputPlayer = getInputPlayer();
    playRound(inputPlayer, computerChoice);
    console.log('You won: ' + scorePlayer + ' times, the computer won: ' + scoreComputer + ' times and you drawed: ' +scoreDraw + ' times')

    console.log('starting 4nd round');
    computerChoice = getComputerChoice();
    inputPlayer = getInputPlayer();
    playRound(inputPlayer, computerChoice);
    console.log('You won: ' + scorePlayer + ' times, the computer won: ' + scoreComputer + ' times and you drawed: ' +scoreDraw + ' times')

    console.log('starting 5nd round');
    computerChoice = getComputerChoice();
    inputPlayer = getInputPlayer();
    playRound(inputPlayer, computerChoice);
    console.log('You won: ' + scorePlayer + ' times, the computer won: ' + scoreComputer + ' times and you drawed: ' +scoreDraw + ' times')
}

// start game loop function
game();
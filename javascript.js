// Computer must know the three choices it can pick Form
const choices = ["rock", "paper", "scissor"];

// Initialize computer variable
let computerChoice

// Computer must choose one of the three choices (random)
function getComputerChoice () {
    let pickComputerChoice = choices[Math.floor((Math.random() * choices.length))];
    return pickComputerChoice; // Computer must return the picked choice
};

// Player input
let inputPlayer = '';

const playerRock = document.querySelector('#rock');
playerRock.addEventListener('click', () => {
    inputPlayer = 'rock';
    computerChoice = getComputerChoice();
    playRound(inputPlayer, computerChoice);
    updateScore();
});

const playerPaper = document.querySelector('#paper');
playerPaper.addEventListener('click', () => {
    inputPlayer = 'scissor';
    computerChoice = getComputerChoice();
    playRound(inputPlayer, computerChoice);
    updateScore();
});

const playerScissor = document.querySelector('#scissor');
playerScissor.addEventListener('click', () => {
    inputPlayer = 'scissor';
    computerChoice = getComputerChoice();
    playRound(inputPlayer, computerChoice);
    updateScore();
});

// When we have input from player and computer, compare two inputs
// Return outcome comparison
function playRound(player, computer){
    console.log(computerChoice + ' The computer');
    console.log(inputPlayer + ' The player');
    if (player == 'rock' && computer == 'paper'){
        scoreComputer++;
        resultString = 'You lose! Paper beats Rock';
    } else if (player == 'rock' && computer == 'scissor'){
        scorePlayer++;
        resultString = 'You win! Rock beats Scissor'; 
    } else if (player == 'paper' && computer == 'rock'){
        scorePlayer++;
        resultString = 'You win! Paper beats rock'; 
    } else if (player == 'paper' && computer == 'scissor'){
        scoreComputer++;
        resultString = 'You lose! Scissor beats Paper'; 
    } else if (player == 'scissor' && computer == 'rock'){
        scoreComputer++;
        resultString = 'You lose! Rock beats Scissor'; 
    } else if (player == 'scissor' && computer == 'paper'){
        scorePlayer++;
        resultString = 'You win! Scissor beats paper'; 
    } else if (player == 'scissor' && computer == 'scissor' || player == 'paper' && computer == 'paper' || player == 'rock' && computer == 'rock'){
        scoreDraw++;
        resultString = 'You Draw!';
    } else {
        resultString = 'You have to pick Rock, Paper or Scissors';
    }
};

// Scoring
let scorePlayer = 0;
let scoreComputer = 0;
let scoreDraw = 0;
let resultString = '';

const playerResult = document.querySelector('#playerresult');
const computerResult = document.querySelector('#computerresult');
const drawResult = document.querySelector('#drawresult');
const resultInText = document.querySelector('#resultintext');

function updateScore () {
    playerResult.textContent = 'Player: ' + scorePlayer.toString();
    computerResult.textContent = 'Computer: ' + scoreComputer.toString();
    drawResult.textContent = 'Draw: ' + scoreDraw.toString();
    resultInText.textContent = resultString;   
    
    if (scorePlayer === 5){ // Checks if game is over
        alert('Hooray! Game over. You beat the computer with ' + scorePlayer.toString() + ' against ' + scoreComputer.toString())
        } else if (scoreComputer === 5){
            alert('Game over! The computer won with ' + scoreComputer.toString() + ' against ' + scorePlayer.toString())
    };
};


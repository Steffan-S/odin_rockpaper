// Computer must know the three choices it can pick Form
const choices = ["rock", "paper", "scissor"];

// Computer must choose a one of the three choices (at random)
function getComputerChoice () {
    let computerChoice = choices[Math.floor((Math.random() * choices.length))];
    return computerChoice;
}

// Computer must return the picked choice
let resultComputerChoice = getComputerChoice();


// console log result function;
console.log(resultComputerChoice);
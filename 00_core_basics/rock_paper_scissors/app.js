'use strict';

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const RESULT_DRAW = 'It is a draw';
const RESULT_PLAYER_WINS = 'You Win! :D';
const RESULT_COMPUTER_WINS = 'You loose';

let gameIsRunning = false;

const startGameBtn = document.getElementById('start-game-btn');

const getPlayerChoice = function() {
    const selection = prompt(`Choose among ${ROCK}, ${PAPER} or ${SCISSORS}: `);
    // Format the user input
    const fSelection = selection.trim().toUpperCase();
    if (
        fSelection !== ROCK && 
        fSelection !== PAPER && 
        fSelection !== SCISSORS 
    ) {
        alert("Choose a valid option, try again");
        return;
    }
    
    return fSelection;
};

const getComputerChoice = function() {

    // Calculate a random number to assign computer's RPS
    const randomValue = Math.random();
    if (randomValue < 0.34) {
        return ROCK;
    } else if (randomValue < 0.67) { 
        // No need to add the other limit. 0.2 already entered the first 'if'
        return PAPER;
    } else {
        return SCISSORS;
    }
};

const getWinner = function(cChoice, pChoice) {
    if (cChoice === pChoice) {
        return RESULT_DRAW;
    } else if (
        (cChoice === ROCK && pChoice === PAPER) ||
        (cChoice === PAPER && pChoice === SCISSORS) ||
        (cChoice === SCISSORS && pChoice === ROCK) 
    ) {
        return  RESULT_PLAYER_WINS;
    } else {
        return RESULT_COMPUTER_WINS;
    }
};


startGameBtn.addEventListener('click', function() {
    if (gameIsRunning) {
        return;
    }
    gameIsRunning = true;
    console.log("Game is starting ...");

    const playerSelection = getPlayerChoice();
    const computerChoice = getComputerChoice();
    console.log("Player selected: " + playerSelection);
    console.log("Computer says: " + computerChoice);

    console.log("RESULT: " + getWinner(computerChoice, playerSelection));
});
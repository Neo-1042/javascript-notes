'use strict';

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const RESULT_DRAW = 'IT IS A DRAW';
const RESULT_PLAYER_WINS = 'YOU WIN! :D';
const RESULT_COMPUTER_WINS = 'YOU LOSE :c';

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

// Convert into arrow function
const getWinner = (cChoice, pChoice) => {
    if (cChoice === pChoice) {
        return RESULT_DRAW;
    } else if (
        (cChoice === ROCK && pChoice === PAPER) ||
        (cChoice === PAPER && pChoice === SCISSORS) ||
        (cChoice === SCISSORS && pChoice === ROCK) 
    ) {
        return  RESULT_PLAYER_WINS;
    } else if (
        (cChoice === PAPER && pChoice === ROCK) ||
        (cChoice === SCISSORS && pChoice === PAPER) ||
        (cChoice === ROCK && pChoice === SCISSORS)
    ) {
        return RESULT_COMPUTER_WINS;
    } else {
        return "Not a valid option. Try again"
    }
};


startGameBtn.addEventListener('click', function() {
    if (gameIsRunning) {
        return;
    }
    gameIsRunning = true;
    console.log("Game is starting ...");

    const playerChoice = getPlayerChoice();
    const computerChoice = getComputerChoice();
    const winner = getWinner(computerChoice, playerChoice);

    // Log results
    console.log("Player selected: " + playerChoice);
    console.log("Computer says: " + computerChoice);
    console.log("RESULT: " + winner);

    // Display results to the user
    // Reminder: 'let' has block scope for this anonymous function only
    let message = `You picked: ${playerChoice}. Computer picked ${computerChoice}.`;
    if (winner === RESULT_DRAW) {
        message += `\nThus, ${RESULT_DRAW}`;
    } else if (winner === RESULT_PLAYER_WINS) {
        message += `\nThus, ${RESULT_PLAYER_WINS}`;
    } else if (winner === RESULT_COMPUTER_WINS) {
        message += `\nThus, ${RESULT_COMPUTER_WINS}`;
    } else {
        message = "Not a valid result. Try again";
    }
    alert(message);
    gameIsRunning = false; // Reset the game
});
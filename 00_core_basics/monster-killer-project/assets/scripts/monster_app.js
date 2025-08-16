'use strict';

// GLOBAL CONSTANTS AND VARIABLES
const ATTACK_VALUE = 10; // Global, hard-coded constant (UPPERCASE is a convention)
const STRONG_ATTACK_VALUE = 17;
const MONSTER_ATTACK_VALUE = 10;
const HEAL_VALUE = 13;

let chosenMaxLife = 100;
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
let hasBonusLife = true; 

adjustHealthBars(chosenMaxLife);

// FUNCTION DEFINITIONS

function endRound() {
    
    // Who has won?
    if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
        alert("Congratulations, you won!");
        reset();
    } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
        alert("GAME OVER");
        reset();
    } else if (currentMonsterHealth <= 0 && currentPlayerHealth <= 0) {
        alert("Draw!");
        reset();
    }
}

function attackMonster(mode) {
    let maxDamage;
    if (mode === 'ATTACK') {
        maxDamage = ATTACK_VALUE;
    } else if (mode === 'STRONG_ATTACK') {
        maxDamage = STRONG_ATTACK_VALUE;
    } else {
        return "Not a valid MODE of attack";
    }
    // Attack the monster
    const damage = dealMonsterDamage(maxDamage);
    currentMonsterHealth -= damage;
    
    // Save the currentPlayerHealth before the monster strikes back
    const initialPlayerHealth = currentPlayerHealth;

    // Monster strikes back (based only on one value)
    const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
    currentPlayerHealth -= playerDamage;
    // Validate whether the user has a bonus life or not
    if (currentPlayerHealth <= 0 && hasBonusLife) {
        hasBonusLife = false;
        removeBonusLife();
        currentPlayerHealth = initialPlayerHealth; // Retrieve the saved value and restore user's health
        alert("The bonus life saved you! You're still alive");
        setPlayerHealth(initialPlayerHealth); // This change reflects on the app
    }
    endRound();
}

// Reset the game when you win, lose or draw
function reset() {
    currentMonsterHealth = chosenMaxLife;
    currentPlayerHealth = chosenMaxLife;
    resetGame(chosenMaxLife); // From vendor.js
}


// Logic for the "ATTACK" button
// "*Handler()" is a naming convention, "*OnClick()" is another option
function attackHandler() {
    attackMonster('ATTACK'); 
}

function strongAttackHandler() {
    attackMonster('STRONG_ATTACK');
}

function healPlayerHandler() {
    let healValue = 0;
    // Validate if health increase will surpase max life (100 pts)
    if (currentPlayerHealth > chosenMaxLife - HEAL_VALUE) {
        alert('You cannot heal beyond ' + chosenMaxLife + ' life points. MAX LIFE value reached.');
        healValue = chosenMaxLife - currentPlayerHealth;
    } else {
        healValue = HEAL_VALUE; // set to the fixed constant value
    }
    increasePlayerHealth(healValue);
    currentPlayerHealth += healValue; // Update the value of that internal variable (not visually reflected on the app)
    endRound();
}




////////////////// Event Listeners on clicking the buttons //////////////////
attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
healBtn.addEventListener('click', healPlayerHandler);
/////////////////////////////////////////////////////////////////////////////
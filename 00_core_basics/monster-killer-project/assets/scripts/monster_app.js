'use strict';

// GLOBAL CONSTANTS AND VARIABLES
const ATTACK_VALUE = 10; // Global, hard-coded constant (UPPERCASE is a convention)
const STRONG_ATTACK_VALUE = 17;
const MONSTER_ATTACK_VALUE = 10;
const HEAL_VALUE = 13;

let chosenMaxLife = 100;
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;

adjustHealthBars(chosenMaxLife);

// FUNCTION DEFINITIONS

function endRound() {
    // Who has won?
    if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
        alert("Congratulations, you won!");
    } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
        alert("GAME OVER");
    } else if (currentMonsterHealth <= 0 && currentPlayerHealth <= 0) {
        alert("Draw!");
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
    
    // The monster strikes back (based only on one value)
    const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
    currentPlayerHealth -= playerDamage;
    endRound();
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
        healValue = HEAL_VALUE; // increase by the fixed constant value
    }
    increasePlayerHealth(healValue);
    currentPlayerHealth += healValue;
    endRound();
    // TODO Why do I lose if I already have health > 0 ?
}

// Event Listeners on clicking the buttons:
attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
healBtn.addEventListener('click', healPlayerHandler);

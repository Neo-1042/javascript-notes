'use strict';

// GLOBAL CONSTANTS AND VARIABLES
const ATTACK_VALUE = 10; // Global, hard-coded constant (UPPERCASE is a convention)
const STRONG_ATTACK_VALUE = 17;
const MONSTER_ATTACK_VALUE = 10;
let chosenMaxLife = 100;
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;

// FUNCTION DEFINITIONS
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

    // Who has won?
    if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
        alert("Congratulations, you won!");
    } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
        alert("GAME OVER");
    } else if (currentMonsterHealth <= 0 && currentPlayerHealth <= 0) {
        alert("Draw!");
    }
}


// Logic for the "ATTACK" button
// "*Handler()" is a naming convention, "*OnClick()" is another option
function attackHandler() {
    attackMonster('ATTACK'); 
}

function strongAttackHandler() {
    attackMonster('STRONG_ATTACK');
}


adjustHealthBars(chosenMaxLife);

// Event Listeners on clicking the buttons:
attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);

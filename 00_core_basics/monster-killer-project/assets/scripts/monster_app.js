'use strict';

const ATTACK_VALUE = 10; // Global, hard-coded constant (UPPERCASE is a convention)
const MONSTER_ATTACK_VALUE = 10;
let chosenMaxLife = 100;
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;

// Logic for the "ATTACK" button
// "*Handler()" is a naming convention, "*OnClick()" is another option
function attackHandler() {
    // Decrease monster's health when attacked
    const damage = dealMonsterDamage(ATTACK_VALUE); // local constant
    currentMonsterHealth -= damage;
    // Monster strikes back
    const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
    currentPlayerHealth -= playerDamage;

    // Have I won?
    if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
        alert("Congratulations, you won!");
    } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
        alert("GAME OVER");
    } else if (currentMonsterHealth <= 0 && currentPlayerHealth <= 0) {
        alert("Draw!");
    }
}


adjustHealthBars(chosenMaxLife);

attackBtn.addEventListener('click', attackHandler);

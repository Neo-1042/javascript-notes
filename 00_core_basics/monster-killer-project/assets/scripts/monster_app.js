'use strict';

// GLOBAL CONSTANTS AND VARIABLES
const ATTACK_VALUE = 10; // Global, hard-coded constant (UPPERCASE is a convention)
const STRONG_ATTACK_VALUE = 17;
const MONSTER_ATTACK_VALUE = 10;
const HEAL_VALUE = 13;
// Refactoring attack modes to avoid the risk of miss-typing
const MODE_ATTACK = 'ATTACK'; // MODE_ATTACK = 0
const MODE_STRONG_ATTACK = 'STRONG_ATTACK'; // MODE_STRONG_ATTACK = 1
// LOGGING
const LOG_EVENT_PLAYER_ATTACK = 'PLAYER_ATTACKS';
const LOG_EVENT_PLAYER_STRONG_ATTACK = 'PLAYER_STRONG_ATTACKS';
const LOG_EVENT_MONSTER_ATTACK = 'MONSTER_ATTACKS';
const LOG_EVENT_PLAYER_HEAL = 'PLAYER_HEALS';
const LOG_EVENT_GAME_OVER = 'GAME_OVER';

let userInput = prompt("Enter a max value for life points");
console.log("User entered: " + userInput + " as chosenMaxLife");
let chosenMaxLife = parseInt(userInput); // Instead of a hard-coded value, the user provides this number

// ERROR HANDLING: parseInt() does NOT generate error codes

// LOGGING
let battleLog = [];

if (isNaN(chosenMaxLife) || chosenMaxLife <= 0 ) {
    chosenMaxLife = 100;
    alert("Enter a valid positive integer. Setting maxLife to " + chosenMaxLife);
}

let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
let hasBonusLife = true; 

adjustHealthBars(chosenMaxLife);

// FUNCTION DEFINITIONS

function writeToLog(pEvent, pValue, pMonsterHealth, pPlayerHealth) {
    let logEntry = {
        event : pEvent,
        value : pValue,
        finalMonsterHealth : pMonsterHealth,
        finalPlayerHealth : pPlayerHealth
        // target will be dynamically added
    };

    switch (pEvent) {
        case LOG_EVENT_PLAYER_ATTACK:
            logEntry.target = 'MONSTER';
            break;
        case LOG_EVENT_PLAYER_STRONG_ATTACK:
            logEntry.target = 'MONSTER';
            break;
        case LOG_EVENT_MONSTER_ATTACK:
            logEntry.target = 'PLAYER'; 
            break;
        case LOG_EVENT_PLAYER_HEAL:
            logEntry.target = '-';
            break;
        case LOG_EVENT_GAME_OVER:
            logEntry.target = '-';
            break;
        default:
            logEntry = {};
    }
    /*
    if (pEvent === LOG_EVENT_PLAYER_ATTACK ) {
        logEntry.target = 'MONSTER';
    } else if ( pEvent === LOG_EVENT_PLAYER_STRONG_ATTACK ) {
        logEntry.target = 'MONSTER';
    } else if ( pEvent === LOG_EVENT_MONSTER_ATTACK ) {
       logEntry.target = 'PLAYER'; 
    } else if ( pEvent === LOG_EVENT_PLAYER_HEAL ) {
        logEntry.target = '-';
    } else if ( pEvent === LOG_EVENT_GAME_OVER ) {
        logEntry.target = '-';
    } else {
        console.log("Not a valid mode");
    }
    */

    battleLog.push(logEntry);
 }


function endRound() {
    
    // Who has won?
    if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
        alert("Congratulations, you won!");
        writeToLog(
            LOG_EVENT_GAME_OVER
            , 'PLAYER WON'
            , currentMonsterHealth
            , currentPlayerHealth
        );
        reset();
    } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
        alert("GAME OVER");
        writeToLog(
            LOG_EVENT_GAME_OVER
            , 'MONSTER WON'
            , currentMonsterHealth
            , currentPlayerHealth
        );
        reset();
    } else if (currentMonsterHealth <= 0 && currentPlayerHealth <= 0) {
        alert("Draw!");
        writeToLog(
            LOG_EVENT_GAME_OVER
            , 'DRAW'
            , currentMonsterHealth
            , currentPlayerHealth
        );
        reset();
    }
}

function attackMonster(mode) {
    let maxDamage;
    let logEvent; // This value changes based on normal or strong attack
    if (mode === MODE_ATTACK ) {
        maxDamage = ATTACK_VALUE;
        logEvent = LOG_EVENT_PLAYER_ATTACK;
    } else if (mode === MODE_STRONG_ATTACK) {
        maxDamage = STRONG_ATTACK_VALUE;
        logEvent = LOG_EVENT_PLAYER_STRONG_ATTACK;
    } else {
        return "Not a valid MODE of attack";
    }
    // Attack the monster
    const damage = dealMonsterDamage(maxDamage);
    currentMonsterHealth -= damage;
    // Logging this change after the attack
    writeToLog(
        logEvent
        , damage
        , currentMonsterHealth
        , currentPlayerHealth
    );
    
    // Save the currentPlayerHealth before the monster strikes back
    const initialPlayerHealth = currentPlayerHealth;

    // Monster strikes back (based only on one value)
    const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
    currentPlayerHealth -= playerDamage;
    writeToLog(
        LOG_EVENT_MONSTER_ATTACK
        , playerDamage
        , currentMonsterHealth
        , currentPlayerHealth
    );

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
    attackMonster(MODE_ATTACK); 
}

function strongAttackHandler() {
    attackMonster(MODE_STRONG_ATTACK);
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
    // Log this change after healing
    writeToLog(
        LOG_EVENT_PLAYER_HEAL
        , healValue
        , currentMonsterHealth
        , currentPlayerHealth
    );

    endRound();
}

function printLogHandler() {
    /* for (let i = 0; i < battleLog.length ; i++) {
        console.log(battleLog[i]);
    }

    for (const logEntry of battleLog) {
        console.log(logEntry);
    }
    */
    let i = 0;
    for (const logEntry of battleLog) {
        console.log(`Entry number: ${i}`);
        for (const key in logEntry) {
            console.log(key);
            console.log(logEntry[key]); // access the respective value
        }
        i++;
    }

}





////////////////// Event Listeners on clicking the buttons //////////////////
attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
healBtn.addEventListener('click', healPlayerHandler);
logBtn.addEventListener('click', printLogHandler);
/////////////////////////////////////////////////////////////////////////////
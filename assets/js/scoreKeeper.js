'use strict'

const h1 = document.querySelector('h1');
const scorePlayer1 = document.querySelectorAll('span')[0];
const scorePlayer2 = document.querySelectorAll('span')[1];
const winnerScore = document.querySelectorAll('span')[2];
const input = document.querySelector('input');
const player1Button = document.querySelectorAll('button')[0];
const player2Button = document.querySelectorAll('button')[1];
const reset = document.querySelectorAll('button')[2];

let scoreP1 = 0;
let scoreP2 = 0; 
let scoreMax = 5;

// === INITIAL ===

function scoreKeeper() {
    insertScoreInSpanMax();
    insertScoreInSpanP1();
    insertScoreInSpanP2();
}

function setScoreMax() {
    scoreMax = +input.value ;
    winnerScore.innerText = +input.value ;
}


// === PLAYER 1 ===

function insertScoreInSpanP1() {

}

function modifyScoreInSpanP1() {

}

function incrementScore1() {

}

// === PLAYER 2 ===

function insertScoreInSpanP2() {

}

function modifyScoreInSpanP2() {

}

function incrementScore2() {
    
}

// === WINNER SCORE ===

function insertScoreInSpanMax() {

}

function modifyWinnerScore() {

}

function setWinnerScore() {

}

// === RESET ===

function resetScores() {

}
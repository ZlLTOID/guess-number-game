'use strict';

let numberTable = document.querySelector('.number');
let guess = document.querySelector('.guess').value;
let message = document.querySelector('.message');
let score = 20;
let highscore = 0;
let check = document.querySelector('.check');
let body = document.querySelector('body');
let again = document.querySelector('.again');

// document.querySelector('.highscore').textContent = sessionStorage.getItem('highscore');

const generateRandomNumber = function() {
    return Math.floor(Math.random(19) * 20) + 1;

}

let number = generateRandomNumber();

check.addEventListener('click', function () {
    guess = parseInt(document.querySelector('.guess').value);
    if (!guess) {
        message.textContent = '⚠️   No number';
    }
    if (!isNaN(guess)) {
        guess = parseInt(document.querySelector('.guess').value);
        --score;
        document.querySelector('.score').textContent = score;
        if (guess > number) {
            message.textContent = 'Try lower number';
            numberTable.textContent = '↓';
        }
        if (guess < number) {
            message.textContent = 'Try higher number';
            numberTable.textContent = '↑';
        }
        if (guess === number) {
            numberTable.textContent = number;
            message.textContent = 'Yeah, that\'s a right number :)';
            check.disabled = true;
            body.style.backgroundColor = '#60b347';
            numberTable.style.width = '30rem';
            console.log(score, highscore)
            if (score > highscore) {
                highscore = score;
                document.querySelector('.highscore').textContent = score;
            }
        }
        if (score < 1) {
            message.textContent = 'GAME OVER :E';
            check.disabled = true;
        }
    }
});

again.addEventListener('click', function () {
    document.querySelector('.check').disabled = false;
    document.querySelector('.guess').value = '';
    message.textContent = 'Start guessing...';2
    document.querySelector('.score').textContent = '20';
    numberTable.textContent = '?';
    numberTable.style.width = '15rem';
    body.style.backgroundColor = '#000000';
    number = generateRandomNumber();
    guess = '';
    score = 20;
})



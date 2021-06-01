'use strict';
const check = document.querySelector('.check');
const again = document.querySelector('.again');
const generateRandomNumber = function () {
    return Math.floor(Math.random(19) * 20) + 1;
}

let numberTableBackground = document.querySelector('.number-background');
let body = document.querySelector('body');
let guess = parseInt(document.querySelector('.guess').value);
let highscore = 0;
let score = 20;
let number = generateRandomNumber();

check.addEventListener('click', function () {
    let message = document.querySelector('.message');
    // let body = document.querySelector('body');
    let guess = parseInt(document.querySelector('.guess').value);
    let numberTable = document.querySelector('.number');
    if (!guess) {
        message.textContent = '⚠️   No number';
    }
    if (!isNaN(guess)) {
        --score;
        document.querySelector('.score').textContent = score;
        if (guess > number) {
            message.textContent = 'Try lower number';
            numberTable.textContent = '↓';
            numberTable.classList.add('down');
            setTimeout(function () {
                numberTable.classList.remove('down');
            }, 101);
        }
        if (guess < number) {
            message.textContent = 'Try higher number';

            document.querySelector('.number').textContent = '↑';
            // numberTable.textContent = '↑';
            numberTable.classList.add('up');
            setTimeout(function () {
                numberTable.classList.remove('up');
            }, 101);
        }
        if (guess === number) {
            message.textContent = 'Yeah, that\'s a right number :)';
            check.disabled = true;
            body.style.backgroundColor = '#32A956';
            numberTable.textContent = number;
            numberTableBackground.style.width = '30rem';
            if (score > highscore) {
                highscore = score;
                document.querySelector('.highscore').textContent = score;
            }
        }
        if (score < 1) {
            message.textContent = 'GAME OVER :E';
            check.disabled = true;
            body.style.backgroundColor = '#aa0e0e';
            numberTable.textContent = ':(';
            numberTable.style.width = '12rem';
            numberTable.style.left = '15%';
        }
    }
    (numberTableBackground, body, guess);
});

again.addEventListener('click', function () {
    let guess = document.querySelector('.guess');
    let message = document.querySelector('.message');
    let numberTableBackground = document.querySelector('.number-background');
    let numberTable = document.querySelector('.number');
    generateRandomNumber()

    document.querySelector('.check').disabled = false;
    guess.value = '';
    message.textContent = 'Start guessing...';
    score = 20;
    document.querySelector('.score').textContent = '20';
    numberTable.textContent = '?';
    numberTableBackground.style.width = '15rem';
    body.style.backgroundColor = '#222';
    number = generateRandomNumber();
    (body);
})

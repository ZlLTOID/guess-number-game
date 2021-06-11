'use strict';
const check = document.querySelector('.check');
const again = document.querySelector('.again');
const message = (message) => document.querySelector('.message').textContent = message;
const numberTableBackground = (numberTableBackground) => document.querySelector('.number-background').style.width = numberTableBackground;
const isCheckDisabled = (isDisabled) => document.querySelector('.check').disabled = isDisabled ;
const generateRandomNumber = () => Math.floor(Math.random(19) * 20) + 1;
const scoreElement = (score) => document.querySelector('.score').textContent = score;

let body = document.querySelector('body');
let highscore = 0;
let score = 20;
let number = generateRandomNumber();

check.addEventListener('click', function () {
    let guess = Number(document.querySelector('.guess').value);
    let numberTable = document.querySelector('.number');

    if (!guess) {
        message('⚠️   No number');
    }
    if (guess !== 0) {
        --score;
        scoreElement(score);
        if (guess > number) {
            message('Try lower number');
            numberTable.textContent = '↓';
            numberTable.classList.add('down');
            setTimeout(function () {
                numberTable.classList.remove('down');
            }, 101);
        }
        if (guess < number) {
            message('Try higher number');
            numberTable.textContent = '↑';
            numberTable.classList.add('up');

            setTimeout(function () {
                numberTable.classList.remove('up');
            }, 101);
        }

        if (guess === number) {
            body.style.backgroundColor = '#32A956';

            message('Yeah, that\'s a right number :)');
            isCheckDisabled(true);
            numberTableBackground('30rem');
            numberTable.textContent = number;

            if (score > highscore) {
                highscore = score;
                document.querySelector('.highscore').textContent = score;
            }
        }
        if (score < 1) {
            body.style.backgroundColor = '#aa0e0e';
            message('GAME OVER :E');
            isCheckDisabled(true);
            numberTable.textContent = ':(';
            numberTable.style.width = '12rem';
            numberTable.style.left = '15%';
        }
    }
    (body);
});

again.addEventListener('click', function () {
    let numberTable = document.querySelector('.number');
    let guess = document.querySelector('.guess');
    guess.value = 0;
    numberTable.textContent = '?';
    body.style.backgroundColor = '#222';
    score = 20;
    scoreElement(score);
    isCheckDisabled(false);
    message('Start guessing...');
    numberTableBackground('15rem');
    generateRandomNumber() // tohle možná nebude fungovat jinak asi všechno ok
    number = generateRandomNumber();
    (body);
})

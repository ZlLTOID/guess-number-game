'use strict';

let numberTableBackground = document.querySelector('.number-background');
const message = document.querySelector('.message');
let score = 20;
let highscore = 0;
const check = document.querySelector('.check');
const again = document.querySelector('.again');

const generateRandomNumber = function () {
    return Math.floor(Math.random(19) * 20) + 1;
}
let number = generateRandomNumber();

check.addEventListener('click', function () {
    let body = document.querySelector('body');
    let guess = parseInt(document.querySelector('.guess').value);
    let numberTable = document.querySelector('.number');
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
            numberTable.classList.add('down');
            setTimeout(function(){ numberTable.classList.remove('down'); }, 101);
        }
        if (guess < number) {
            message.textContent = 'Try higher number';
            numberTable.textContent = '↑';
            numberTable.classList.add('up');
            setTimeout(function(){ numberTable.classList.remove('up'); }, 101);
        }
        if (guess === number) {
            numberTableBackground.textContent = number;
            message.textContent = 'Yeah, that\'s a right number :)';
            check.disabled = true;
            body.style.backgroundColor = '#60b3147';
            numberTableBackground.style.width = '30rem';
            console.log(score, highscore)
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
});

again.addEventListener('click', function () {
    let body = document.querySelector('body');
    console.log(body)

    document.querySelector('.check').disabled = false;
    document.querySelector('.guess').value = '';
    message.textContent = 'Start guessing...';
    document.querySelector('.score').textContent = '20';
    numberTable.textContent = '?';
    numberTable.style.width = '15rem';
    body.style.backgroundColor = '#000000';
    number = generateRandomNumber();
    score = 20;
})



$('#button').onClick(function(){
});



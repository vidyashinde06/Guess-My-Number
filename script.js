'use strict';

/*Generete secret random number*/
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

// check whether guess number is correct or not.
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //when number is not enter
  if (!guess) {
    document.querySelector('.message').textContent = 'No number!';
  } //when guess is correct
  else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '😎 Correct Guess';
    document.querySelector('body').style.backgroundColor = '#2d9d4d';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
  //when guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? '⬆️ Too High' : '⬇️ Too Low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }

  /*
  //refactored the code because to high and low serious having the same code so put that into same block using ternary operator.
  }//when guess is high
  else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "⬆️ Too High";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lost the game!";
      document.querySelector(".score").textContent = 0;
    }
  } //when guess is low
  else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "⬇️ Too Low";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = " You lost the game";
      document.querySelector(".score").textContent = 0;
    }*/
});

// play again
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing!';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
});

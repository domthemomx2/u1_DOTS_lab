/*
 * DOTS: Level One
 *
 */

let score = 0;
let ball = document.querySelector('.js-ball');
let scoreDisplay = document.querySelector('.js-score');
let levelWinner = document.querySelector('.level-winner');

ball.addEventListener('click', function() {
    score += 10;
    scoreDisplay.innerText = score;

    if (score >= 100) {
        console.log('You have won level one!')
        levelWinner.style.opacity = 1;
    }
    console.log(score)
    console.log(scoreDisplay)
  });

  